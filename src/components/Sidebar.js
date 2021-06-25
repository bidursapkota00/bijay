import React from 'react'
import {NavLink} from 'react-router-dom'
import profile from '../img/profile.jpg'

function Sidebar({show, click}) {
    return (
        <div className={`sidebar ${show ? "nav-toggle" : ""}`}>
            <nav className="nav">
                <div className="profile">
                    <img src={profile} alt="profile pic..."/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item" onClick={click}>
                        <div className="alink">
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </div>
                    </li>

                    <li className="nav-item" onClick={click}>
                        <div className="alink">
                            <NavLink to='/about' exact activeClassName='active' className=''>
                                About
                            </NavLink>
                        </div>
                    </li>

                    <li className="nav-item" onClick={click}>
                        <div className="alink">
                            <NavLink to='/projects' exact activeClassName='active' className=''>
                                Projects
                            </NavLink>
                        </div>
                    </li>

                    <li className="nav-item" onClick={click}>
                        <div className="alink">
                            <NavLink to='/contact' exact activeClassName='active' className=''>
                                Contact
                            </NavLink>
                        </div>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 bijay sapkota
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Sidebar
