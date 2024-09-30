import React from 'react'
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";

const Location = () => {
    return (
        <Button className="countries d-flex justify-content-between align-items-center">
            <div className="header-location d-flex flex-column">
                <span className="location-description">Your Location</span>
                <span className='current-location'>Select a location</span>
            </div>
            <div className="ms-auto">
                <FaAngleDown color='#233a95' />
            </div>
        </Button>
    )
}

export default Location