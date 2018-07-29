import React from "react";

const SearchBox = ({ searchChange, searchBy }) => {
    return (
        <div className='pa1'>
            <input 
                className='input-reset pa1 mb1 w-20'
                type='search' 
                placeholder={ searchBy }
                onChange={ searchChange } 
            />
        </div>
    )
}

export default SearchBox