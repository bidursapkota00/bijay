import React from 'react'
import { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'
import cross from '../img/cross.jpg'

function MenuItem({ menu }) {


    const [View, setView] = useState({ project: null })
    const closeModel = () => {
        setView({ project: null })
    }
    const openModel = item => {
        setView({ project: item })
        console.log(item)
    }
    return (
        <>
            <div className="MenuItem">
                {
                    menu.map(item => {
                        return (
                            <div className="menus" key={item.id}>
                                <div className="img-data">
                                    <img src={item.image} alt="" />
                                    <ul className="hover-items">
                                        <li>
                                            <a href={item.link2}><img src={item.icon2} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu-title">
                                    <div className="project-btns">
                                        <a download href={item.link1}>
                                            <button className="btn project-btn">Download</button>
                                        </a>
                                        <button className="btn" onClick={() => openModel(item)}>View</button>
                                    </div>
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                View.project && (
                    <div className="modal">
                        <Modal isOpen={true} onRequestClose={closeModel}>
                            <Zoom>
                                <img className="close-model" src={cross} alt="cross" onClick={closeModel}/>
                                <div className="project-details">
                                    <div>
                                        <img src={View.project.image} alt={View.project.title} />
                                    </div>
                                    <div className="project-details-description">
                                        <p><strong>{View.project.title}</strong></p>
                                        <p>{View.project.description}</p>
                                    </div>
                                </div>
                            </Zoom>
                        </Modal>
                    </div>
                )
            }
        </>
    )
}

export default MenuItem
