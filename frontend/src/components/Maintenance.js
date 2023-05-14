import React from 'react';
import '../css/Maintenance.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Maintenance() {
    return (
        <div>
            <div className="container">
                <h1>MAINTENANCE</h1>
                <p class="description">
                    I am currently working on the page!
                </p>
            </div>
            <div className="sm-links">
                <div>
                    <a className="icons" href="https://github.com/alesgsanudoo">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                <div>
                    <a className="icons" href="https://www.linkedin.com/in/alejandro-s-griffith-13b210261/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
                <div>
                    <a className="icons" href="https://www.instagram.com/alesgsanudoo_/">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Maintenance;