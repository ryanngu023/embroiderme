import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";


export default function Home(props) {
    const [index, setIndex] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleSwipe = (selectedIndex, e) => {
        setGalleryIndex(selectedIndex);
    };


    return (
        <div id = 'home-body'>
            <div>
                <div className='homebanner'>
                    <h1>Welcome to NekoNeedlework</h1>
                </div>
                <div className='featured'>
                    <div className='featured-header'>
                        <img src='./img/linediamond.png'/>
                        <h2>Featured Designs</h2>
                        <img src='./img/linediamondrev.png'/>
                    </div>
                    <div className='selected'>
                        <div className='selected-carousel'>
                            <Carousel className='w-100' activeIndex={index} onSelect={handleSelect} variant='dark'>
                                <Carousel.Item>        
                                    <img className="d-block w-100" src='./img/tempitem.png' alt="slider"/>
                                    <Carousel.Caption>
                                    <h3>Best Seller!</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="item-description w-75">
                            <p className='item-name'>Shirt Name</p>
                            <p className='description-text'>Options/Colors</p>
                            <button>View</button>
                        </div>
                    </div>
                    <div className='other-featured'>
                        <img src='./img/tempmodel.png'/>
                        <img src='./img/tempmodel.png'/>
                        <img src='./img/tempmodel.png'/>
                    </div>
                    <button className='all-featured'>View All</button>
                </div>
                <div className='instagram-updates'>
                    <div className='featured-header'>
                        <img src='./img/linediamond.png'/>
                        <h2>Updates</h2>
                        <img src='./img/linediamondrev.png'/>
                    </div>
                    <div className='instagram-embeds'>
                        <img className='peekingcat' src="./img/catpeek.png"/>
                        <img className='embeded' src='./img/tempig.png'/>
                        {/* Instagram embeds */}
                    </div>
                </div>
                <div className='gallery featured'>
                    <div className="featured-header">
                        <img src='./img/linediamond.png'/>
                        <h2>Gallery</h2>
                        <img src='./img/linediamondrev.png'/>
                    </div>
                    <Carousel className='gallery-carousel' activeIndex={galleryIndex} onSelect={handleSwipe}>
                        <Carousel.Item>
                            <img className="d-block w-100" src='./img/catgallery.png'/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}