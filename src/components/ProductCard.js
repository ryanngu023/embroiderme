import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

export default function ProductCard(props) {
    let temp = true;
    let productData = props.product;
    let productImage = productData['image'];
    if(productImage.includes('./')) {
        temp = false;
    }

    return (
        <div className='shopitem'>
            <img className='productimage' src={temp? urlFor(productImage[0]): './img/tempig.png'} />
            <div className='itemtext'>
                <p className='bold'>{productData['name']}</p>
                <div className='bottomtext d-flex'>
                    <p>S / M / L</p>
                    <p>${productData['price']}</p>
                </div>
            </div>
        </div>
    )
}