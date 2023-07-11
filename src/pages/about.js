import './style.css';
import kikiEmbriodery from  './components/kiki_embriodery.jpg'

const about = () => {
    return (
        <div id='about-body'>
            {/* This header will have the beginning of the background image */}
            <h1>About us</h1>

            {/*This section will have explanation of kiet himself */}
            <h2> Who am I?  </h2>

            <div>
                <img alt="Linkedin profile image of Kiet To"/>
                <p>Here is where Kiet introduces himself</p>
            </div>

            {/* This section focuses on the buisness*/}
            <h2>About EmbrioderMe</h2>

            <p>This is where Kiet talks about his motivations, the service, and why he cares</p>
        </div>
    );
};

export default about