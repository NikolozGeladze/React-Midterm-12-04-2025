import React, { useState } from 'react'
import './Navbar.css'
import Cart from '../Cart/Cart'

export default function Navbar({ cart, removeItem, clearCart }) {
    const [avatarUrl, setAvatarUrl] = useState('user-profile-icon.jpg')

    function handleImageUpload(e) {
        e.preventDefault();

        const fileInput = document.querySelector('.file')

        if (fileInput) {
            fileInput.click();
        }
    }

    function menuBurgerActive() {
        var navigationBars = document.querySelector('.navigation-bars')
        var overly = document.querySelector('.overlay')
        navigationBars.classList.toggle('active')
        overly.classList.toggle('active')
    }

    return (
        <>
            <nav>
                <div className="left">
                    <i onClick={menuBurgerActive} className="fa-solid fa-bars"></i>
                    <h1>sneakers</h1>
                    <div className="navigation-bars">
                        <i onClick={menuBurgerActive} className="fa-solid fa-xmark"></i>
                        <a className='weight-400' href="#">Collections</a>
                        <a className='weight-400' href="#">Men</a>
                        <a className='weight-400' href="#">Women</a>
                        <a className='weight-400' href="#">About</a>
                        <a className='weight-400' href="#">Contact</a>
                    </div>
                </div>
                <div className="right">
                    <Cart removeItem={removeItem} cart={cart} clearCart={clearCart} />
                    <div className="user">
                        <img src={avatarUrl} alt="User Image" className="user-img" />

                        <form className="form">
                            <button onClick={handleImageUpload} type='submit'></button>
                            <input
                                type="file"
                                className='file'
                                hidden
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setAvatarUrl(URL.createObjectURL(file));
                                    }
                                }}
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
