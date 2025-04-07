import React, { useState } from 'react'
import './Card.css'

export default function Card() {
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const images = ["image 1.png", "image 2.png", "image 3.png", "image 4.png",]
    const [selectedImg, setSelectedImg] = useState(images[0])
    const [num, setNum] = useState(1)
    const [list, setList] = useState([])
    const info = {
        id: 1,
        company: "SNEAKER COMPANY",
        title: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        currentPrice: 125,
        beforeDiscount: 250,
        discountPercent: 50,
    }

    function addToCardActive() {
        setIsActive(true);
        // addToCart(product, quantity);
    }

    return (
        <>
            <div className="card">
                <div className="card-left">
                    <img src={selectedImg} alt="" className="selected-img" />
                    <div className="thumbnail-imgs">
                        {
                            images.map(img => (
                                <img
                                    key={img}
                                    className={`thumbnail-img ${selectedImg === img && 'selected'}`}
                                    src={img}
                                    alt=""
                                    onClick={() => setSelectedImg(img)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="card-right">
                    <h5 className='weight-700'>{info.company}</h5>
                    <h1 className='weight-700'>{info.title}</h1>
                    <p className='description'>{info.description}</p>
                    <div className="price">
                        <div className="current-and-discount-percent">
                            <h2 className='weight-700'>${info.currentPrice.toFixed(2)}</h2>
                            <span className='weight-700'>{info.discountPercent}%</span>
                        </div>
                        <h3 className='weight-700'>${info.beforeDiscount.toFixed(2)}</h3>
                    </div>
                    <div className="buttons">
                        <div className={`plus-minus-btns ${isActive ? 'active' : ''}`}>
                            <button><i className="fa-solid fa-minus"></i></button>
                            <p className='weight-700'>{quantity}</p>
                            <button><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <button onClick={addToCardActive} className={`add-to-cart weight-700 ${isActive ? 'active' : ''}`}><i className="fa-solid fa-cart-shopping"></i>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
