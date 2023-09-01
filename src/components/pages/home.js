import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";
import { urlFor } from "../../lib/client";


export default function Home(props) {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        function updateDimension() {
            setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension);
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    

    return (
        <div id = 'home-body'>
            {screenSize.width < 768 && <HomeMobile />}
            {screenSize.width >= 768 && <HomeDesktop productData={props.productData} featuredData={props.featuredData} />}
        </div>
    )
}

export function HomeMobile(props) {
    const [index, setIndex] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleSwipe = (selectedIndex, e) => {
        setGalleryIndex(selectedIndex);
    };

    return (
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
        )
}

export function HomeDesktop(props) {
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [socialIndex, setSocialIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setFeaturedIndex(selectedIndex);
    };

    const handleSwipe = (selectedIndex, e) => {
        setSocialIndex(selectedIndex);
    };

    let mainItem = {
        'bannerimage': './img/room.png',
        'itemname': 'Temp Name',
        'description': 'temp Description'
    }

    let subItemOne = {
        'bannerimage': './img/room.png',
        'itemname': 'Temp Name',
        'description': 'temp Description'
    }

    let mainImageUrl = mainItem['bannerimage'];
    let subItemOneImage = subItemOne['bannerimage'];
    if(props.featuredData !== null) {
        mainItem = props.featuredData[0];
        subItemOne = props.featuredData[1];
        mainImageUrl = urlFor(mainItem['bannerimage']);
        subItemOneImage = urlFor(subItemOne['bannerimage']);
    }

    return (
        <div className='scroller mt-1'>
            <div className='desktopbanner'>
                <div className='description right'>
                    <h2>Welcome to Neko Needleworks</h2>
                    <p>A Shop aimed to fulfill your embroidery needs,
                    hand-designed and crafted with passion, built
                    with care and thought. Discover a world of quality crafts with unique and creative designs.</p>
                </div>
            </div>
            <Carousel className='w-100' activeIndex={featuredIndex} onSelect={handleSelect} interval={null} indicators={false}>
                <Carousel.Item>
                    <img className='w-100 carouselimg' src={mainImageUrl} />
                    <Carousel.Caption>
                        <div className='description leftcarousel'>
                            <h2>{mainItem['itemname']}</h2>
                            <p>{mainItem['description']}</p>
                            <button type='button'>Button Text</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100 carouselimg' src={subItemOneImage} />
                    <Carousel.Caption>
                        <div className='description leftcarousel'>
                            <h2>{subItemOne['itemname']}</h2>
                            <p>{subItemOne['description']}</p>
                            <button type='button'>Button Text</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Carousel className='w-100' activeIndex={socialIndex} onSelect={handleSwipe} interval={null} indicators={false}>
                <Carousel.Item>
                    <img className='w-100 carouselimg' src='./img/instatemp.png' />
                    <Carousel.Caption>
                        <div className='description rightcarousel'>
                            <h2>Instagram</h2>
                            <p>Instagram is our preferred way to communicate, so check out our latest updates and arrivals
                            by following our instagram @nekoneedleworks! </p>
                            <button type='button'>Button Text</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100 carouselimg' src='./img/room.png' />
                    <Carousel.Caption>
                        <div className='description rightcarousel'>
                            <h2>Youtube</h2>
                            <p>Youtube is one of the ways to get extra content of Neko Needleworks! Check out behind the scenes and never seen before footage on our youtube channel! </p>
                            <button type='button'>Button Text</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='desktopbanner'>
                <div className='text-center pt-5'>
                    <h2 className='mt-5 text-white'>The All New "Chainsaw Man" Collab</h2>
                    <img className='px-3' src='./img/sample.png' />
                    <img className='px-3' src='./img/sample.png' />
                    <img className='px-3' src='./img/sample.png' />
                </div>
            </div>
        </div>
     
    )
}