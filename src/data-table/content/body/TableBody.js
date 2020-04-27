// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableBodyRow from './TableBodyRow';
import * as PropTypes from 'prop-types';
import {getEndIndex, getStartIndex} from '../../util';

function TableBody(props) {
    const {columns, currentPage, data, pageSize} = props;

    return (
        <tbody>
        {
            data.slice(getStartIndex(currentPage, pageSize), getEndIndex(data.length, currentPage, pageSize))
                .map((supplier) => {
                    return <TableBodyRow key={`row-${supplier.id}`} columns={columns} rowData={supplier}/>;
                })
        }
        </tbody>
    );
}

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default TableBody;

