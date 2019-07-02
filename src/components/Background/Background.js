import React from 'react';
import './Background.scss';
import intro from '../../assets/img/thum6.png'
import image1 from '../../assets/img/a1.png'
import image2 from '../../assets/img/a2.png'
import image3 from '../../assets/img/a3.png'
import image4 from '../../assets/img/a4.png'
import image5 from '../../assets/img/a5.png'
import image6 from '../../assets/img/a6.png'
import image7 from '../../assets/img/a7.png'
import image8 from '../../assets/img/a8.png'
// import image8 from '../../assets/img/a7.png'

const Background = ({loading, handleimage}) => {
    return (
        <div className='background'>
            <img src={intro} data='box0' alt="" id="intro" className="backimg" onLoad={handleimage}/>
            <img src={image1} data='box1' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image1} data='box2' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image1} data='box3' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image2} data='box4' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image3} data='box5' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image4} data='box6' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image5} data='box7' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image6} data='box8' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image7} data='box9' alt="" className="backimg" onLoad={handleimage}/>
            <img src={image8} data='box10' alt="" className="backimg" onLoad={handleimage}/>
        </div>
    );
};

export default Background;