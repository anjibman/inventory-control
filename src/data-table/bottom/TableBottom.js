// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import TableInfo from './TableInfo';
import PaginationBar from './PaginationBar';
import TableBody from '../content/body/TableBody';

function TableBottom(props) {
    return (
        <div className='table-bottom'>
            <TableInfo/>
            <PaginationBar
                pageSize={props.pageSize}
                total={props.total}
                paginationHandler={props.paginationHandler}
            />
        </div>
    )
}

TableBottom.propTypes = {
    paginationHandler: PropTypes.func.isRequired
};

export default TableBottom;

