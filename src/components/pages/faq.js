import React from "react";
import '../../style.css';
import leftArrow from '../pictures/arrows/longArrowDiamondLeft.png';
import rightArrow from '../pictures/arrows/longArrowDiamondRight.png';
import catDivider from '../pictures/kitties/cresentArrowKitty.png';

export default function FAQ(props) {
    return (
        <div id = 'faq-body'>
            {/*This will hold the header card */}
            <h1 id='faq-header'> Frequently Asked Questions </h1>

            {/* ordering and shipping section
            <div class = 'about-arrows'>
                <img src = {leftArrow} alt ='left diamond arrow' style = {{height: 6 }}/>
                <h2 class = 'faq-titles' style = {{padding: 7}} > Ordering and Shipping </h2>
                <img src = {rightArrow} alt = 'right diamond arrow' style = {{height: 7}}/>
            </div>
            <div id = 'faq-OS-section'>
                <p>
                You can either submit a custom design order request form here or you can go to the 
                shop menu to look at what designs are available! 
                </p>
                <img src = {catDivider} alt = 'cat cartoon between two lines going top and bottom' style={{width: 30}}/>
                <p>
                Shipping fee will be added yea yea yea yea yea yea yea yea yea yeay eay eay eay eay 
                eaye aye aeya eayeyaye aeya eyae yae ayeyayeyaeyyae
                </p>
            </div> */}

            {/* Custom service section
            <div id = 'faq-custom-section'>
                <h2 class = 'faq-titles'> Custom Service </h2>
                <p>
                I offer custom embroidery services, however due to the labor needed to complete 
                these services, they cost much more than regular orders.  
                </p>
                <p>
                How it works: You first fill out a custom design ordering form (here). {}
                This will put me in contact with you, so that we can work 1:1 in collecting ideas 
                and your vision of the design.
                </p>
            </div> */}

            <h3 class='faq-titles'> Table of Contents</h3>
            {/* Do this section later */}

        <h3 >Why buy at Neko Needlework?</h3>

        <h3 >ORDERING AND SHIPPING</h3>

        <h4> How do I place an order?</h4>

        <h4>Do you ship internationally?</h4>

        <h4>How do I track my order?</h4>

        <h3>PRODUCT CARE AND DAMAGE WARRANTIES</h3>

        <h4>My product came with defects/wrong order. Can I have a refund?</h4>
        </div>
    )
}