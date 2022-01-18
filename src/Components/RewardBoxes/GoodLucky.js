import React from 'react';
import './RewardBoxes.css';
import Treasure_box from '../../Utils/Picture/treasure.png';
import Coin from '../../Utils/Picture/coin.png';
import { Link } from 'react-router-dom';

function GoodLucky() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center w-100'>
            <div className='d-flex flex-column align-items-center justify-content-center w-75' id="good_lucky">
                <div>REWARD</div>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <img src={Treasure_box} alt='Treasure_Box' />
                </div>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <div>
                        <strong>COINS :</strong>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <strong>200</strong>
                        <img src={Coin} alt="coin" />
                    </div>
                </div>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default GoodLucky;
