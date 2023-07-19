import React from "react";
import '../../style.css';
import kietPic from '../pictures/kiet_linkedin.jpg';
import largeLeftArrow from '../pictures/arrows/longArrowDiamondLeft.png';
import largeRightArrow from '../pictures/arrows/longArrowDiamondRight.png';
import smallLeftArrow from '../pictures/arrows/shortArrowDiamondLeft.png';
import smallRightArrow from '../pictures/arrows/shortArrowDiamondRight.png';
import aboutKitty from '../pictures/kitties/aboutKitty.png';

const about = () => {
    return (
        <div id='about-body'>
            {/* This header will have the beginning of the background image */}
            <h1 id='about-header'>About us</h1>

            {/*This section will have explanation of kiet himself */}
            <h2 class = 'about-titles'> Whomst am I?  </h2>

            <div id='about-kiet-info'>
                <img id = 'about-kiet-pic' src = {kietPic} alt="Linkedin profile image of Kiet To"/>
                <p class ='about-info-sections'> Hi there, I am Kiet (K-eet). I am currently an ECE 
                    student at the UW. Outside of school, I work at Vinason (a Viet restaurant in 
                    SODO) and as a swim instructor/lifeguard for the downtown YMCA.
                </p>
            </div>
            
            <div id='about-service-section'>
                {/* This section focuses on the buisness*/}
                <div class = 'about-arrows'>
                    <img src = {largeLeftArrow} alt= 'left diamond arrow' style = {{height: 7}}/>
                    <h2 class = 'about-titles' style = {{padding: 10}}>About EmbrioderMe</h2>
                    <img src = {largeRightArrow} alt= 'right diamond arrow' style = {{height: 8}}/>
                </div>

                <p class ='about-info-sections' >
                Let me introduce you to <strong>EmbroiderMe. </strong>
                To put it simply, I was not a fan of printed graphic tees because 
                of one main reason. The graphic would start to fade, making the clothing unappealing, 
                and you end up disliking or not wearing it anymore. Determined to find a better, more 
                dependable, sustainable, and enjoyable alternative, I took matters into my own hands. 
                Spring of 2022, I happened to stumble across embroidery, which seemed to hold the 
                solution I had been seeking. Driven by curiosity, I took it upon myself to research what
                embroidery was and how the automated process works. After more than a year of 
                tinkering, learning, and embroidering out designs for fun and close friends.  
                Finally, with complete trust in my expertise, skills, and unwavering passion for my 
                craft, I am wholeheartedly driven to share my artistic creations with others!
                </p>

                <div class='about-arrows'>
                    <img src = {smallLeftArrow} alt= 'left diamond arrow' style = {{height: 8}}/>
                    <img src = {aboutKitty} alt= 'cute kitty face' style = {{height: 25, padding: 10}}/>
                    <img src = {smallRightArrow} alt = 'right diamond arrow' style = {{height: 8}}/>
                </div>

                <p class = 'about-info-sections'> Kiet </p>

            </div>
        </div>
    );
};

export default about;