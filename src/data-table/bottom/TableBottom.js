// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableInfo from './TableInfo';
import PaginationBar from './PaginationBar';

function TableBottom(props) {
    return (
        <div className='table-bottom'>
            <TableInfo/>
            <PaginationBar/>
        </div>
    )
}

TableBottom.propTypes = {

};

export default TableBottom;

