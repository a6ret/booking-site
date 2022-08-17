import React from 'react';
import './featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img
                    src='https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o='
                    alt='featured'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='
                    alt='featured'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Moscow</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o='
                    alt='featured'
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Bucharest</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
