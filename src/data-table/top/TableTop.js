// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import LengthSelector from './LengthSelector';
import SearchBar from './SearchBar';

function TableTop(props) {
    return (
        <div className='table-top'>
            <LengthSelector/>
            <SearchBar/>
        </div>
    )
}

TableTop.propTypes = {

};

export default TableTop;



