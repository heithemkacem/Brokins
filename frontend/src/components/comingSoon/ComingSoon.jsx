import React from 'react'
import './comingSoon.css'
import UnderConstructionPicture from '../../assets/undraw_under_construction.svg'

const ComingSoon = () => {
    return (
        <div className="inside division">
            <div className="division">
                <img id ="pic" src={UnderConstructionPicture} alt="Under Construction Picture" />
            </div>
            <div className="text division">
                <h1 className="headingText1">Construction loading!</h1>  
            <h2>This page is under construction</h2>
                <h3>we will notify you as soon as it launches </h3> 
            </div>
        </div>

    )
}

export default ComingSoon