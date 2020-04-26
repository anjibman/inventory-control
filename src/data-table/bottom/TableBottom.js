// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import TableInfo from './TableInfo';
import PaginationBar from './PaginationBar';
import TableBody from '../content/body/TableBody';

function TableBottom(props) {
    return (
        <div className='table-bottom'>
            <TableInfo
                endIndex={props.endIndex}
                startIndex={props.startIndex}
                total={props.total}
            />
            <PaginationBar
                pageSize={props.pageSize}
                total={props.total}
                paginationHandler={props.paginationHandler}
            />
        </div>
    )
}

TableBottom.propTypes = {
    endIndex: PropTypes.string.isRequired,
    paginationHandler: PropTypes.func.isRequired,
    startIndex: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired
};

export default TableBottom;

