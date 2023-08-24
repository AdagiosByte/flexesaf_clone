import React, { useState} from 'react'
import { PageName } from '../Utils/constants';

const Topbar = (state) => {
    return (
        <div style={{ display: 'flex' , justifyContent: 'space-between', marginTop:'40px'}}>
            <div style={{ display: 'flex' }}>
                <img src='../Images/flexisaf_image.jpg' alt='flexisaf_image.jpg' width="100px" height="100px" />
                <p style={{ fontWeight: 'bold' }}>flexisaf</p>
            </div>
            
            <div style={{right:'0px'}}>
                {PageName.map((page) => (
                    <button
                        style={{ border: 'none' , cursor:'pointer', background: 'transparent'}} key={page.name}>
                            {console.log(state.state)}
                            {console.log(page.name)}
                        <a href={page.link} style={{ color: state.state == page.name ? 'rgb(0, 130, 244)' : '#000', textDecoration: 'none',
                    fontSize: '16px', margin: 20}}>{page.name}</a>
                    </button>
                ))}
            </div>
        </div >
    )
}

export default Topbar