import React from 'react';
import './RewardBoxes.css';
import cry_man from '../../Utils/Picture/sad-crying.gif';
import { Link } from 'react-router-dom';

function BadLucky() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100 text-center text-white' id="bad_lucky">
            <h1 className='my-5'>Unfortunately!</h1>
            <img className='my-5 rounded' src={cry_man} alt='cry_man' />
            <p>I hope you will good luck for tomorrow.</p>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default BadLucky;
