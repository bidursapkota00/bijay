import React from 'react'
import '../styles/About.css'
import about from '../img/2.png'
import ServiceSection from '../components/ServiceSection'
function About() {
    return (
        <div className="AboutPage">
            <div style={{ padding: '4rem' }}>
                <div className='Title'>
                    <h3>
                        About Me
                        <span>About Me</span>
                    </h3>
                </div>
                <div className="imageSection">
                    <div className="img">
                        <img src={about} alt="...about img" />
                    </div>
                    <div className="about-info">
                        <h4>I am <span>Bijay Sapkota</span></h4>
                        <p className='about-text'>
                            I am electronics and communication engineer.
                            <br />
                            Optical Fiber Splicing, Fiber Problems Rectification & FTTH Network Planning are my key skills.
                        </p>
                        <div className="about-details">
                            <div className="left-section">
                                <p>Full Name</p>
                                <p>Age</p>
                                <p>Country</p>
                                <p>Nationality</p>
                                <p>Languages</p>
                                <p>Address</p>
                            </div>
                            <div className="right-section">
                                <p>: Bijay Sapkota</p>
                                <p>: 25</p>
                                <p>: Nepal</p>
                                <p>: Nepali</p>
                                <p>: English, Nepali</p>
                                <p>: Sindhupalchowk, Nepal</p>
                            </div>
                        </div>
                        <a href="/BijaySapkotaCV.pdf" download>
                            <button className='btn'>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Title Achieve'>
                <h3>
                    Achievements
                    <span>Achievements</span>
                </h3>
            </div>
            <div className="achievements-container">
                <ul>
                    <li><span><strong>First position in Hardware Competition at Himalayan Exhibition, 2018</strong></span></li>
                    <li><span><strong>Best paper award in KEC Conference, 2018</strong></span></li>
                    <li><span><strong>Best Minor Project in Electronics and Communication, 2019</strong></span></li>
                    <li><span><strong>Awarded with Best idea in YATRA 3.0, 2019</strong></span></li>
                    <li><span><strong>Best paper award in KEC Conference, 2019</strong></span></li>
                    <li><span><strong>IOE Electronics & Communication Faculty Topper, 2020</strong></span></li>
                </ul>
            </div>
            <div className='Title' style={{ marginTop: '5rem', marginLeft: '4rem' }}>
                <h3>
                    Publications
                    <span>Publications</span>
                </h3>
            </div>
            <div className="services-container">
                <ServiceSection link='http://kec.edu.np/wp-content/uploads/2020/01/Paper_20.pdf' title='KEC Conference, 2020 (Best paper award)' text='Virtual Eye for Visually Impaired People' />
                <ServiceSection title='International Conference on Electrical, Communication, Electronics, Instrumentation and Computing(ICECEIC), 2019' text='Smart Glove for Sign Language Translation' />
                <ServiceSection link='http://kec.edu.np/wp-content/uploads/2018/10/2.pdf' title='KEC Conference, 2019 (Best paper award)' text='Smart Glove for Sign Language Translation using Arduino' />
            </div>
        </div>
    )
}

export default About
