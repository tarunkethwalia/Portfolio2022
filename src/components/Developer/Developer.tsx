import React, { useState } from 'react';
import './Developer.css';
import myimage from '../../images/ME.png';
import { FaGithubAlt, FaLinkedinIn, FaEnvelope, FaPlay } from 'react-icons/fa';
import { ScreenImages } from '../../utilities/ScreenDocs';

const Developer = () => {
    const [show, setShow] = useState(0);

    const handleMail = () => {
        window.open('mailto:tarunkethwalia18@gmail.com');
    }

    const handleUrl = (url) => {
        window.open(url, '_blank');
    }

    const handleShow = () => {
        let ScreenLength = ScreenImages.length;
        if(show === ScreenLength - 1) {
            setShow(0);
        }
        else {
            setShow(show + 1);
        }
    }

    return (
        <div className="dev-holder">
            <div className="upperflow"></div>
            <div className="lowerflow"></div>
            <h1 className='developer'>DEVELOPER</h1>
            <div className="main-container container">
                <div className="name-container">
                    <h1 className='tarun-title'>Tarun Kethwalia</h1>
                </div>
                <div className="detailsContainer col-md-12">
                    <div className="row first-row">
                        <div className="about-me col-md-6 order-2 order-md-1">
                            <div className="about-me-upper">
                                <p className='about-info'>I am a Software Developer from India with a Soft Spot for Angular, React and NodeJs. Currently exploring Blockchain, living in a cave.</p>
                                <p className='contact-info'>Contact Info:-</p>
                                <p className='about-info-extra'>+91-9891198501</p>
                                <p className='about-info-extra'>tarunkethwalia18@gmail.com</p>
                            </div>
                            <div className="about-me-lower col-md-12">
                                <div className="row">
                                    <div className="lower-left col-md-6">
                                        <FaGithubAlt className='icons' onClick={() => handleUrl('https://github.com/tarunkethwalia')} />
                                        <FaEnvelope className='icons' onClick={handleMail} />
                                        <FaLinkedinIn className='icons' onClick={() => handleUrl('https://www.linkedin.com/in/tarun-kethwalia-a908b6171/')} />
                                        <FaPlay className='icons' onClick={handleShow} />
                                    </div>
                                    <div className="lower-right col-md-6">
                                        <div className="window">
                                            <img src={ScreenImages[show]} alt="Window" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills col-md-6 order-1 order-md-2">
                            <img src={myimage} alt="MyImage" />
                            <button>Angular</button>
                            <button>Blockchain</button>
                            <button>React</button>
                            <button>NodeJs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer;