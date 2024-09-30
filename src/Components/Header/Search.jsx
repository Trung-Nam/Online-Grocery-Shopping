import React from 'react'
import { IoIosSearch } from 'react-icons/io';
const Search = () => {
    return (
        <div className="header-search ms-3 me-3 d-flex align-items-center">
            <input
                type="text"
                placeholder='Search for products...'
            />
            <button>
                <IoIosSearch fontSize='25px' />
            </button>
        </div>
    )
}

export default Search