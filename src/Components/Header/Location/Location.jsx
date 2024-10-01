import React, { useState } from 'react'
import { Button, Dialog } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io';
import './Location.scss'
import { MdClose } from 'react-icons/md';

const Location = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);


    return (
        <div className="header-location-wrapper" onClick={() => setIsOpenModal(true)}>
            <Button className="header-location-btn d-flex justify-content-between align-items-center">
                <div className="header-location d-flex flex-column">
                    <span className="location-description">Your Location</span>
                    <span className='current-location'>Select a location</span>
                </div>
                <div className="ms-auto">
                    <FaAngleDown color='#233a95' />
                </div>
            </Button>
            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                className='location-modal'
            >
                <Button className='close-popup' onClick={(e) => { e.stopPropagation(); setIsOpenModal(false); }}>
                    <MdClose />
                </Button>


                <h5 className="entry-title">Choose your Delivery Location</h5>
                <div className="entry-description">Enter your address and we will specify the offer for your area.</div>
                <div className="header-search w-100 d-flex align-items-center">
                    <input
                        type="text"
                        placeholder='Search your area...'
                    />
                    <button>
                        <IoIosSearch fontSize='25px' />
                    </button>
                </div>

                <ul className="countries__list mt-3">
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                    <li className="countries__list-item"><Button>India</Button></li>
                </ul>
            </Dialog>
        </div>
    )
}

export default Location