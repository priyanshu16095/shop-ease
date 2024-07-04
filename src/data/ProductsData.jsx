import React, { useState, useEffect } from 'react'
import useFetchAPI from './useFetchAPI'

function ProductsData(selectedCategory) {
    const { data, loading, error } = useFetchAPI('https://fakestoreapi.com/products')
    const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([])

    function findUniqueCategories() {
        let set = new Set()
        data.map(item => {
            if (!set.has(item.category)) {
                set.add(item.category)
            }
        })
        return [...set]
    }
    let categories = findUniqueCategories(data)

    function findItemOfSelectedCategory() {
        const filteredProducts = data.filter(item => item.category === selectedCategory);
        setSelectedCategoryProducts(filteredProducts);
    }
    useEffect(() => { findItemOfSelectedCategory() }, [selectedCategory])

    return { data, loading, error, categories, selectedCategoryProducts }
}

export default ProductsData
