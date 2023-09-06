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
            {screenSize.width < 768 && <HomeMobile galleryData={props.galleryData} />}
            {screenSize.width >= 768 && <HomeDesktop productData={props.productData} featuredData={props.featuredData} galleryData={props.galleryData} />}
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

    let tempGallery = {
        'image': './img/room.png',
        'title': 'Temp Name',
        'description': 'temp Description'
    }

    let galleryURLs = [tempGallery['image']];

    let mobileGalleryItems = [tempGallery];
    if(props.galleryData !== null) {
        mobileGalleryItems = props.galleryData;
        galleryURLs = mobileGalleryItems?.map((element) => {
            return urlFor(element['image']);
        })
        
    }

    let mobileGalleryArray = mobileGalleryItems?.map((item, index) => {
        return (
            <Carousel.Item key={item['title']}>
                <img className="d-block w-100" src={galleryURLs[index]}/>
            </Carousel.Item>
        )
    })

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
                    {mobileGalleryArray}
                </Carousel>
            </div>
        </div>
        )
}

export function HomeDesktop(props) {
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [socialIndex, setSocialIndex] = useState(0);
    const [galleryDesktopIndex, setGalleryDesktopIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setFeaturedIndex(selectedIndex);
    };

    const handleSwipe = (selectedIndex, e) => {
        setSocialIndex(selectedIndex);
    };

    const handleGallerySwipe = (selectedIndex, e) => {
        setGalleryDesktopIndex(selectedIndex);
    }

    let mainItem = {
        'bannerimage': './img/room.png',
        'itemname': 'Temp Name',
        'description': 'temp Description'
    }
    let tempItem = {
        'image': './img/room.png',
        'title': 'Temp Name',
        'description': 'temp Description'
    }

    let featuredItems = [mainItem];
    let galleryItems = [tempItem];

    let mainImageUrl = mainItem['bannerimage'];
    let tempItemImage = tempItem['image'];

    let featuredImageURLs = [mainImageUrl];
    let galleryImageURLs = [tempItemImage];

    if(props.featuredData !== null) {
        featuredItems = props.featuredData;
        featuredImageURLs = featuredItems?.map((element) => {
            return urlFor(element['bannerimage']);
        })
    }

    let featuredArray = featuredItems?.map((item, index) => {
        return (
            <Carousel.Item key={item['itemname']}>
                <img className='w-100 carouselimg' src={featuredImageURLs[index]} />
                <Carousel.Caption>
                    <div className='description leftcarousel'>
                        <h2>{item['itemname']}</h2>
                        <p>{item['description']}</p>
                        <button type='button'>Button Text</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    if(props.galleryData !== null) {
        galleryItems = props.galleryData;
        galleryImageURLs = galleryItems?.map((element) => {
            return urlFor(element['image']);
        })
    }

    let galleryArray = galleryItems?.map((item, index) => {
        return (
            <Carousel.Item key={item['title']}>
                <img className='w-100 carouselimg' src={galleryImageURLs[index]} />
                <Carousel.Caption>
                    <div className='description leftcarousel'>
                        <h2>{item['title']}</h2>
                        <p>{item['description']}</p>
                        <button type='button'>Button Text</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    return (
        <div className='scroller mt-1'>
            <div className='desktopbanner snap'>
                <div className='description right'>
                    <h2>Welcome to Neko Needleworks</h2>
                    <p>A Shop aimed to fulfill your embroidery needs,
                    hand-designed and crafted with passion, built
                    with care and thought. Discover a world of quality crafts with unique and creative designs.</p>
                </div>
            </div>
            <div className='snap'>
            <Carousel className='w-100' activeIndex={featuredIndex} onSelect={handleSelect} interval={null} indicators={false}>
                {featuredArray}
            </Carousel>
            </div>

            <div className='snap'>
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
            </div>
            <div className='snap'>
                <Carousel className='w-100' activeIndex={galleryDesktopIndex} onSelect={handleGallerySwipe} interval={null} indicators={false}>
                    {galleryArray}
                </Carousel>
            </div>
        </div>
     
    )
}