import React, { useState, useEffect } from "react";
import './styles/SlideShow.css';
import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [foto1, foto2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
    
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="container-slide">
            <button className="nav-button" onClick={goToPreviousSlide}>❮</button>
            <div className="item-slide">
                <img src={slides[currentSlide]} alt={`Banner ${currentSlide + 1}`} />
            </div>
            <button className="nav-button" onClick={goToNextSlide}>❯</button>
            <div className="indicators">
                {slides.map((_, index) => (
                    <span key={index} className={`indicator ${index === currentSlide ? 'active' : ''}`}></span>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
