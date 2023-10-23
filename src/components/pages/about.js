import React, {useState} from "react";
import kietPic from '../pictures/kiet.jpg';
import largeLeftArrow from '../pictures/arrows/longArrowDiamondLeft.png';
import largeRightArrow from '../pictures/arrows/longArrowDiamondRight.png';
import smallLeftArrow from '../pictures/arrows/shortArrowDiamondLeft.png';
import smallRightArrow from '../pictures/arrows/shortArrowDiamondRight.png';
import aboutKitty from '../pictures/kitties/aboutKitty.png';

const About = (props) => {
    const [teamButtonsState, setTeamButtonsState] = useState(new Array(8).fill(false));
    let teamData = [
        {
            'image': '',
            "description": '',
            'name': '',
            'team': 0
        }
    ]
    // TODO: Change <span> tags for meet the team section to <img> tags to implement the tap functionality

    return (
        <div id='about-body'>
            {/* This header will have the beginning of the background image */}
            <h1 id='about-header'>About us</h1>

            {/*This section will have explanation of kiet himself */}
            <div id='about-whomst-section'> 
                <h2 className = 'about-titles d-block d-lg-none'> Whomst am I?  </h2>

                <div id='about-kiet-info'>
                    <img id = 'about-kiet-pic' src = {kietPic} alt="Linkedin profile image of Kiet To"/>
                    <p className ='about-info-sections d-sm-block d-lg-none'> Hi there, I am Kiet (K-eet). I am currently an ECE 
                        student at the UW. Outside of school, I work at Vinason (a Viet restaurant in 
                        SODO) and as a swim instructor/lifeguard for the downtown YMCA.
                    </p>
                    <div className='d-flex flex-column text-center'>
                    <p className='about-info-sections d-none d-lg-block mx-auto'>
                    Hi there! My name is Kiet To and I am the creator of Neko Needlework. I am currently an ECE student at the UW going into embedded systems. </p>
                    <p className='about-info-sections d-none d-lg-block mx-auto'>
                    Outside of school, I instruct swimming at the Y and work at a restaurant by the stadium. Things I enjoy doing are swimming, calisthenics, playing with my cats, spending time with friends, and of course, embroidery! I would love to go into more details but let’s first talk about NN!
                    </p>
                    </div>
                </div>
            </div>
            
            <div id='about-service-section'>
                {/* This section focuses on the buisness*/}
                <div className = 'about-arrows mt-3'>
                    <img src = {largeLeftArrow} alt= 'left diamond arrow' style = {{height: 7}}/>
                    <h2 className = 'about-titles' style = {{padding: 10}}>About Neko Needlework</h2>
                    <img src = {largeRightArrow} alt= 'right diamond arrow' style = {{height: 8}}/>
                </div>
                
                <div className='service-body d-flex mt-lg-3'>
                <p className ='about-info-sections mx-auto' >
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
                <img className='mx-5 serviceimg d-none d-lg-block' src = {kietPic} alt="Linkedin profile image of Kiet To"/>
                </div>

                <div className='about-arrows d-flex d-lg-none'>
                    <img src = {smallLeftArrow} alt= 'left diamond arrow' style = {{height: 8}}/>
                    <img src = {aboutKitty} alt= 'cute kitty face' style = {{height: 50, padding: 10}}/>
                    <img src = {smallRightArrow} alt = 'right diamond arrow' style = {{height: 8}}/>
                </div>

                <p className = 'about-info-sections mx-auto text-center d-block d-lg-none'> Kiet </p>
            </div>

            <div className='meet-team-section mt-5'>
                <div className='about-arrows pt-3'>
                    <img src = {largeLeftArrow} alt= 'left diamond arrow' style = {{height: 7}}/>
                    <h2 className = 'about-titles' style = {{padding: 10}}>Meet The Team!</h2>
                    <img src = {largeRightArrow} alt= 'right diamond arrow' style = {{height: 8}}/>
                </div>
                <p className='text-center mb-0'>
                    Lastly, credit must be given where it’s due. Neko Needlework wouldn’t be possible without the help and support of many incredible people. So without further delay, let me introduce to you the rest of the team at Neko Needlework!
                </p>

                <p className='text-center my-5 h2'>Website Devs</p>
                <div className='d-flex w-100 justify-content-center'>
                    <div className="d-flex flex-column">
                        <span className='circle text-center'><p>Tap Here!</p></span>
                        <p className='text-center'>Ryan</p>
                    </div>
                    <div className='d-flex flex-column'>
                    <span className='circle text-center'><p>Tap Here!</p></span>
                    <p className='text-center'>Sophie</p>
                    </div>
                </div>

                <p className='text-center my-5 h2'>Marketing</p>
                <div className='d-flex w-100 justify-content-center'>
                    <div className='d-flex flex-column'>
                        <span className='circle text-center'><p>Tap Here!</p></span>
                        <p className='text-center'>Vinh</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='circle text-center'><p>Tap Here!</p></span>
                        <p className='text-center'>Breana</p>
                    </div>
                </div>

                <p className='text-center my-5 h2'>Design</p>
                <div className='w-100'>
                    <div className='justify-content-center d-flex w-100'>
                        <div className='d-flex flex-column'>
                            <span className='circle text-center'><p>Tap Here!</p></span>
                            <p className='text-center'>Sienna</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='circle text-center'><p>Tap Here!</p></span>
                            <p className='text-center'>Téa</p>
                        </div>
                    </div>

                    <div className='justify-content-center d-flex w-100'>
                        <div className='d-flex flex-column'>
                            <span className='circle text-center'><p>Tap Here!</p></span>
                            <p className='text-center'>Audrey</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='circle text-center'><p>Tap Here!</p></span>
                            <p className='text-center'>Hajin</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;