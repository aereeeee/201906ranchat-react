import React from 'react';
import './Background.scss';
import intro from '../../assets/img/thum.png'
import image1 from '../../assets/img/a1.png'
import image2 from '../../assets/img/a2.png'
import image3 from '../../assets/img/a3.png'
import image4 from '../../assets/img/a4.png'
import image5 from '../../assets/img/a5.png'
import image6 from '../../assets/img/a6.png'
import image7 from '../../assets/img/a7.png'
// import image8 from '../../assets/img/a7.png'

const Background = () => {
    return (
        <div className='background'>
            <img src={intro} data='box0' alt="" className="backimg"/>
            <img src={image1} data='box1' alt="" className="backimg"/>
            <img src={image1} data='box2' alt="" className="backimg"/>
            <img src={image2} data='box3' alt="" className="backimg"/>
            <img src={image3} data='box4' alt="" className="backimg"/>
            <img src={image4} data='box5' alt="" className="backimg"/>
            <img src={image5} data='box6' alt="" className="backimg"/>
            <img src={image6} data='box7' alt="" className="backimg"/>
            <img src={image7} data='box8' alt="" className="backimg"/>
            
        </div>
    );
};

export default Background;