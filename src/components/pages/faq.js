import React from "react";
import '../../style.css';


export default function FAQ(props) {
    return (
        <div id = 'faq-body'>
            {/*This will hold the header card */}
            <h1 id='faq-header'> Frequently Asked Questions </h1>
        
        <div id='faq-content'>
            <h3 class='faq-section-titles' id='faq-table-header'> Table of Contents</h3>
            <div id="faq-table-section">
                <div class='faq-table-col'>
                    <p><a href='#ordering-shipping'>Ordering and Shipping</a></p>
                    <p><a href='#item-care'>Item care and Damage</a></p>
                </div>
                <div class='faq-table-col'>
                    <p> <a href='#gen-questions'>General Questions </a></p>
                    <p> <a href='#confidentiality'> Confidentiality and Trust</a> </p>
                </div>  
            </div>

        <h3 class='faq-section-titles' >Why buy at Neko Needlework?</h3>
        <p>
        Our product stands out because we personally design and tailor each product by hand. We focus 
        the needs of our customers to ensure the best quality possible. 
        That means following up on any questions and concerns right away!
        </p>

        <h3 class='faq-section-titles' id='ordering-shipping'>ORDERING AND SHIPPING</h3>

        <h4 class='faq-questions'> How long will my order take to arrive?</h4>
        <p>Generally 1-2 weeks but should not be longer than 2. </p>

        <h4 class='faq-questions'> How do I place an order?</h4>
        <p>Our online store is open 24/7.</p>
        <ul>
            <li>To place a normal order, you can browse the shop page and add products to a cart to be checked out</li>
            <li>To place a custom order, please go <a href='contact/custom'>here</a></li>
        </ul>

        <h4 class='faq-questions'>Do you ship internationally?</h4>
        <p>Not at the moment, but we do plan on expanding our ventures in the future.  
            Follow our socials to stay updated!</p>

        <h4 class='faq-questions'>How do I track my order?</h4>
        <p>
        Go to tracking.com/etc.
        </p>

        <h4 class='faq-questions'> How do I cancel my order?</h4>
        <p>Reach out within 24 hours to our support to cancel!</p>

        <h3 class='faq-section-titles' id='item-care'>PRODUCT CARE AND DAMAGE WARRANTIES</h3>

        <h4  class='faq-questions'>My product came with defects/wrong order. Can I have a refund?</h4>
        <p>All sales are final, with no refunds. However, under extreme product defects such as 
            massive tearing, reach out to our support and we will examine the situation on a case 
            by case situation.</p>

        <h4  class='faq-questions'>How should I take care of my clothing products?</h4>
        <p>
        You should wash the product in cold water (swapped inside-out), and preferably by hand. 
        Extreme temperature can introduce unwanted shrinkage, so we recommend using warm or cold 
        temperature for washing & drying.
        </p>

        <h4 class='faq-questions'>Is there warranty for the product?</h4>
        <p>We do offer a one-time 1-year limited warranty for any of the product that you’ve purchased. 
        In the case of product defect (i.e. color fade over time) and you’d like to use your warranty, we 
        can offer up to 30% off discount for that same product.</p>

        <h3 class='faq-section-titles' id='gen-questions'>GENERAL QUESTIONS</h3>

        <h4 class='faq-questions'>Where are you located?</h4>
        <p>We are based in Seattle, Washington.</p>

        <h4 class='faq-questions'>Is there a chance that my custom order becomes an ordinary product on site?</h4>
        <p>No, your custom design will be unique to your own order only. You can trust Kiet’s words for it.</p>

        <h3 class='faq-section-titles' id='confidentiality'>CONFIDENTIALITY & TRUST</h3>

        <h4 class='faq-questions'>Is this website legit?</h4>
        <p>Neko Needlework is a small organization of passionate Seattle-based students aiming to 
            deliver fun, quality, and wearable products.</p>

        <h4 class='faq-questions'>What kind of payments do you accept?</h4>
        <p>We accept online debit and credit cards. Including but not limited to MasterCard, PayPal, 
            Visa, Bank of America, and Venmo. (maybe more...).</p>

        <h4 class='faq-questions'>Is my purchase confidential?</h4>
        <p>Payments will be secure under Stripe’s own security system (short description) (link here)</p>

        <h4 class='faq-questions'>I have a question that isn’t listed here. How do I contact?</h4>
        <p>
        You can contact us via Nekoneedlework@gmail.com with your questions.
        </p>
        <p id='faq-page-end'></p>
        </div>
        </div>
    )
}