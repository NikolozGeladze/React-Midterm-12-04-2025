import React, { useState } from 'react'
import './Navbar.css'
import Cart from '../Cart/Cart'

export default function Navbar() {
    const [avatarUrl, setAvatarUrl] = useState('user-profile-icon.jpg')

    function handleImageUpload(e) {
        e.preventDefault();

        const fileInput = document.querySelector('.file')

        if (fileInput) {
            fileInput.click();
        }
    }

    function uploadImageDIsplay() {

    }

    return (
        <>
            <nav>
                <div className="left">
                    <h1>Sneakers</h1>
                    <a className='weight-400' href="#">Collections</a>
                    <a className='weight-400' href="#">Men</a>
                    <a className='weight-400' href="#">Women</a>
                    <a className='weight-400' href="#">About</a>
                    <a className='weight-400' href="#">Contact</a>
                </div>
                <div className="right">
                    <Cart />
                    <div className="user">
                        <img src={avatarUrl} alt="User Image" className="user-img" />

                        <form className="form">
                            <button onChange={uploadImageDIsplay} onClick={handleImageUpload} type='submit'>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
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
