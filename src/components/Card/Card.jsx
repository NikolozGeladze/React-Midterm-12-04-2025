import React, { useState, useEffect } from 'react'
import './Card.css'

export default function Card({ addToCart, removeItem, product, quantityRemoved }) {
    const images = product.images
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const [selectedImg, setSelectedImg] = useState(images[0])
    const [selectedImgFullscreen, setSelectedImgFullscreen] = useState(images[0])
    const [slide, setSlide] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    useEffect(() => {
        if (quantityRemoved) {
            setQuantity(0);
            setIsActive(false);
        }
    }, [quantityRemoved]);

    function addToCardActive() {
        if (quantity == 0) {
            setQuantity(1)
        }
        setIsActive(true);
        addToCart(product, quantity + 1);
    }

    function changeQuantity(plusMinus) {
        if (plusMinus == 'plus') {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            addToCart(product, newQuantity);
        } else if (plusMinus == 'minus') {
            if (quantity == 1) {
                setIsActive(false);
                removeItem(product.id)
            } else {
                const newQuantity = quantity - 1;
                setQuantity(newQuantity);
                addToCart(product, newQuantity);
            }
        }
    }

    function sliderSlideChange(plusMinusSlides) {
        if (plusMinusSlides == 'minus') {
            if (slide == 0) {
                setSlide(images.length - 1)
            }
            else {
                setSlide(slide - 1)
            }
        }
        if (plusMinusSlides == 'plus') {
            if (slide == images.length - 1) {
                setSlide(0)
            }
            else {
                setSlide(slide + 1)
            }
        }
    }

    function openFullscreen(img) {
        setIsFullscreen(true);
        setSelectedImgFullscreen(img);
        setSlide(images.indexOf(img));
    }
    
    function closeFullscreen() {
        setIsFullscreen(false);
    }
    
    return (
        <>
            <div className="card">
                <div className={`fullscreen ${isFullscreen ? 'active' : ''}`}>
                    <div className="full-screen-images">
                        <i onClick={closeFullscreen} className="fa-solid fa-xmark"></i>
                        <button className='minus-fullscreen' onClick={() => sliderSlideChange('minus')}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <img src={images[slide]} alt="" className='slide-fullscreen' />
                        <button className='plus-fullscreen' onClick={() => sliderSlideChange('plus')}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <div className="thumbnail-imgs-fullscreen">
                            {images.map(img => (
                                <img
                                    key={img}
                                    className={`thumbnail-img-fullscreen ${selectedImgFullscreen === img ? 'selected' : ''}`}
                                    src={img}
                                    alt=""
                                    onClick={() => openFullscreen(img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-left">
                    <div className="slider">
                        <button className='minus' onClick={() => sliderSlideChange('minus')}><i className="fa-solid fa-arrow-left"></i></button>
                        <img src={images[slide]} alt="" className='slide' />
                        <button className='plus' onClick={() => sliderSlideChange('plus')}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="selected-image-container">
                        <img src={selectedImg} alt="" onClick={() => setIsFullscreen(true)} className="selected-img" />
                    </div>
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
                    <h5 className='weight-700'>{product.company}</h5>
                    <h1 className='weight-700'>{product.title}</h1>
                    <p className='description'>{product.description}</p>
                    <div className="price">
                        <div className="current-and-discount-percent">
                            <h2 className='weight-700'>${product.currentPrice.toFixed(2)}</h2>
                            <span className='weight-700'>{product.discountPercent}%</span>
                        </div>
                        <h3 className='weight-700'>${product.beforeDiscount.toFixed(2)}</h3>
                    </div>
                    <div className="buttons">
                        <div className={`plus-minus-btns ${isActive ? 'active' : ''}`}>
                            <button onClick={() => changeQuantity('minus')}><i className="fa-solid fa-minus"></i></button>
                            <p className='weight-700'>{quantity}</p>
                            <button onClick={() => changeQuantity('plus')}><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <button onClick={addToCardActive} className={`add-to-cart weight-700 ${isActive ? 'active' : ''}`}><i className="fa-solid fa-cart-shopping"></i>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
