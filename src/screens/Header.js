import React from 'react'
import Typed from 'react-typed'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import viber from '../img/viber.png'
import cross from '../img/cross.jpg'
import viber_link from '../img/viber_link.png'
import {useState} from 'react'

function Header() {
    const [viber_l, setViber] = useState(false)
    return (
        <div className="header-wraper">
            <div className={`${viber_l ? "display_viber" : "no_viber"}`}>
                <div className="cross">
                    <img className="cross_img" src={cross} alt="" onClick={() => setViber(false)}/>
                    <img src={viber_link} alt="" />
                </div>
            </div>
            <Particles
                params={{
                    particles: {
                        number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 600
                        }
                        },
                        shape: {
                        type: 'circle',
                        color: '#f9ab00',
                        stroke: {
                            width: 5,
                            color: '#f9ab00'
                        }
                        },
                        line_linked: {
                        color: '#ef4035',
                        width: 3, 
                        }
                    }
                }}
            />
            <div className="main-info">
                <h1>hi!, i am</h1>
                <h1>electronics & communication engineer</h1>
                <Typed
                    className='typed-text'
                    strings={['project supervision', 'optical fiber splicing', 'fiber problems rectification', 'FTTH network planning']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/contact">
                    <button className="btn btn-main-offer">contact me</button>
                </a>
                <div className="icons">
                    <a className='icon-holder' href='https://www.facebook.com/bijay.sapkota.1447'>
                            <FontAwesomeIcon icon={faFacebook} className='icon fb'/>
                    </a>
                    <img src={viber} alt="" onClick={() => setViber(true)}/>
                </div>
           </div> 
        </div>
    )
}

export default Header
