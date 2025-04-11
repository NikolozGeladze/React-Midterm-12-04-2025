import React, { useState } from 'react'
import './Cart.css'

export default function Cart({ cart, removeItem, clearCart }) {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(cartCount);
    

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
                <i onClick={showHideCart} className="fa-solid fa-cart-shopping"><label className={`.cart-count ${cartCount !== 0 ? 'show' : ''}`}>{cartCount}</label></i>
                <div className="dropdown">
                    <div className="cart-header">
                        <p className='weight-700'>Cart</p>
                    </div>
                    <div className="line"></div>
                    <div className="content">
                        {
                            cart.length === 0 ? (
                                <div className="empty-cart weight-700">Your Cart Is Empty.</div>
                            ) : (
                                <>
                                    {cart.map((item) => (
                                        <div key={item.id} className="item">
                                            <img src={item.images[0]} alt={item.title} />
                                            <div className="info">
                                                <p className='title'>{item.title}</p>
                                                <div className="price">
                                                    <p>
                                                        ${item.currentPrice} x {item.quantity} <strong>${item.currentPrice * item.quantity}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <i onClick={() => removeItem(item.id)} className="fa-solid fa-trash-can"></i>
                                        </div>
                                    ))}
                                    <button onClick={() => { showHideCart(); clearCart(); }} className="checkout-btn weight-700">Checkout</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
