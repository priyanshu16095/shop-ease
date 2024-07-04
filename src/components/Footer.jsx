import React from 'react'

function Footer() {
    return (
        <div className='footer flex-v'>

            <div className="footer__top flex-v gap">
                <p className="heading">Newsletter</p>
                <div className="footer__form wrap flex-h gap-sm">
                    <input type="text" placeholder='your@gmail.com' />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer__bottom flex-v gap">
                <div className="footer__links wrap flex-h gap">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                    <p className="link">FAQs</p>
                    <p className="link">News</p>
                    <p className="link">Careers</p>
                    <p className="link">Contact us</p>
                </div>
                <p>Designed by Priyanshu</p>
            </div>

        </div>
    )
}

export default Footer
