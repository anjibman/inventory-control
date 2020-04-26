// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import LengthSelector from './LengthSelector';
import SearchBar from './SearchBar';

function TableTop(props) {
    return (
        <div className='table-top'>
            <LengthSelector pageSizeHandler={props.pageSizeHandler} pageSize={props.pageSize}/>
            <SearchBar/>
        </div>
    )
}

TableTop.propTypes = {
    pageSizeHandler: PropTypes.func.isRequired
};

export default TableTop;



