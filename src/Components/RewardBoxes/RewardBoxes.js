import React , { useState } from 'react';
import './RewardBoxes.css';
import Reward_boxes from '../../Utils/Picture/GiftBox.png';
import BadLucky from './BadLucky';
import GoodLucky from './GoodLucky';


function RewardBoxes() {

    const [ openBoxes , setOpenBoxes ] = useState(false);
    const [ titleOpenBoxes , setTitleOpenBoxes ] = useState(false);

    async function openingBoxes() {
        setOpenBoxes(true);
        setTitleOpenBoxes(true);
        window.location.pathname = "/goodlucky"
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center text-center w-100'>
              { titleOpenBoxes ? null : <h1 className='text-white'>Click To Open You Boxes!</h1> }
               { !openBoxes ? <div className='gift_box' onClick={openingBoxes}>
                    <img src={Reward_boxes} alt='Gift_Box'  className={!openBoxes ? "Gift_Box" : "openning"} />
                    <div className='gift_box_shadow'></div>
                </div> :  <GoodLucky />}
        </div>
    )
}

export default RewardBoxes;
