// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import TableInfo from './TableInfo';
import PaginationBar from './PaginationBar';

function TableBottom(props) {
    return (
        <div className='table-bottom'>
            <TableInfo
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                total={props.total}
            />
            <PaginationBar
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                paginationHandler={props.paginationHandler}
                total={props.total}
            />
        </div>
    )
}

TableBottom.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    paginationHandler: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
};

export default TableBottom;

