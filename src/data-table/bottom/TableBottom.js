// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import TableInfo from './TableInfo';
import PaginationBar from './PaginationBar';

function TableBottom(props) {
    return (
        <div className='table-bottom'>
            <TableInfo
                endIndex={props.endIndex}
                startIndex={props.startIndex}
                total={props.total}
            />
            <PaginationBar
                numPages={props.numPages}
                pageSize={props.pageSize}
                paginationHandler={props.paginationHandler}
                total={props.total}
            />
        </div>
    )
}

TableBottom.propTypes = {
    endIndex: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    paginationHandler: PropTypes.func.isRequired,
    startIndex: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default TableBottom;

