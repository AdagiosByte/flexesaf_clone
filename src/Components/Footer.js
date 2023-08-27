import React from 'react'
import './Footer.css'
import { Company, Products, Resources, Legal } from '../Utils/constants';

const Footer = () => {
    return (
        <div style={{ background: 'rgb(5, 34, 75)', display: 'flex' }}>
            <div style={{marginTop: '30px'}}>
                <img src='https://assets.website-files.com/606c1bd6b947503e4…2/606c3713738e43dd3653181c_green%20horizontal.svg' alt='flexisaf_image2.jpg' />
                <p>
                    <a href='tel:+2347059887123'>
                        <strong>UK:</strong>
                        <br />
                        <strong>167-169 Great Portland Street,</strong>
                        <br />
                        <strong>5th Floor, London, W1W 5PF</strong>
                    </a></p>
                <p>
                    <a href='tel:+2347059887123'>
                        <strong>Dubai:</strong>
                        <br />
                        <strong>R5 – 011 Cluster R, Retail Level,</strong>
                        <br />
                        <strong>Jumeirah Lake Towers, Dubai, UAE.</strong>
                    </a></p>
                <strong>info@flexisaf.com</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gridRowGap: '16px', gridColumnGap: '16px' }}>
                <div>
                    <h3>Company</h3>
                    {Company.map((page) => (
                        <div style={{ marginTop: '16px', }}>
                            <a href={page.link}>{page.name}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Products</h3>
                    {Products.map((page) => (
                        <div style={{ marginTop: '16px', }}>
                            <a href={page.link}>{page.name}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Resources</h3>
                    {Resources.map((page) => (
                        <div style={{ marginTop: '16px', }}>
                            <a href={page.link}>{page.name}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <h3> Legal</h3>
                    {Legal.map((page) => (
                        <div style={{ marginTop: '16px', }}>
                            <a href={page.link}>{page.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Footer