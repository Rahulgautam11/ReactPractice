import React from 'react'
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosEffect = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, });
    }, [])
    return (
        <div className='aoscontainer'>

            <div className="card" data-aos="fade-right">using npm "install --save aos@next"</div>
            <div className="card" data-aos="fade-right">card 1</div>
            <div className="card" data-aos="fade-right">card 2</div>
            <div className="card" data-aos="flip-right">card 3</div>
            <div className="card" data-aos="slide-up">card 4</div>
            <div className="card" data-aos="flip-down">card 5</div>
            <div className="card" data-aos="zoom-in">card 6</div>
            <div className="card" data-aos="zoom-out">card 7</div>
            <div className="card" data-aos="slide-down">card 8</div>
            <div className="card" data-aos="fade-left">card 9</div>
            <div className="card" data-aos="fade-right">card 10</div>
        </div>
    )
}

export default AosEffect