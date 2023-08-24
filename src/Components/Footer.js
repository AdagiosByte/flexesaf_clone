import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ background: 'rgb(5, 34, 75)', display: 'flex' }}>
            <div >
                <img src='https://assets.website-files.com/606c1bd6b947503e4…2/606c3713738e43dd3653181c_green%20horizontal.svg' alt='flexisaf_image2.jpg' />
                <p>
                    <strong>UK:</strong>
                    <br />
                    <strong>167-169 Great Portland Street,</strong>
                    <br />
                    <strong>5th Floor, London, W1W 5PF</strong></p>
                <p>
                    <strong>Dubai:</strong>
                    <br />
                    <strong>R5 – 011 Cluster R, Retail Level,</strong>
                    <br />
                    <strong>Jumeirah Lake Towers, Dubai, UAE.</strong></p>
                <strong>info@flexisaf.com</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div>
                    come
                </div>
                <div>
                    isaf_image
                </div>
                <div>
                    3738e43dd3653181c
                </div>
            </div>
        </div>
    )
}

export default Footer