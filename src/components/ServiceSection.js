import React from 'react'
import '../styles/services.css'

function ServiceSection({ title, text, link }) {
    return (
        <div className="serviceSection">
            <a href={link}>
                <div className="service">
                    <div className="service-content">
                        <h5 className="s-title">{title}</h5>
                        <p className="s-text">
                            {text}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ServiceSection
