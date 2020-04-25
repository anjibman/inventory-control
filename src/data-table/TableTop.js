import React from 'react';
import LengthSelector from '../components/LengthSelector';
import SearchBar from '../components/SearchBar';

function TableTop(props) {
    return (
        <header className='table-header'>
            <LengthSelector/>
            <SearchBar/>
        </header>
    )
}

TableTop.propTypes = {

};

export default TableTop;



