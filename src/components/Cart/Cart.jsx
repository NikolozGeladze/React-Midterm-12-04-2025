import React from 'react'
import './Cart.css'

export default function Cart() {
    function showHideCart() {
        var cartDropdown = document.querySelector('.cart .dropdown')

        cartDropdown.classList.toggle('show')
    }

    window.addEventListener("click", (e) => {
        var cartDropdown = document.querySelector('.cart .dropdown')
        
        if (!e.target.closest('.cart')) {
            if (cartDropdown.classList.contains('show')) {
                cartDropdown.classList.remove('show')
            }
        }
    })
    
    return (
        <>
            <div className="cart">
                <i onClick={showHideCart} className="fa-solid fa-cart-shopping"></i>
                <div className="dropdown">
                    <div className="cart-header">
                        <p className='weight-700'>Cart</p>
                    </div>
                    <div className="line"></div>
                    <div className="content">
                        <div className="empty-cart weight-700">Your Cart Is Empty.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
