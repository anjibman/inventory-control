// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableBodyRow from './TableBodyRow';
import * as PropTypes from 'prop-types';

function TableBody(props) {
    const { columns, startIndex, endIndex, data} = props;

    return (
        <tbody>
        {
            data.slice(startIndex, endIndex).map((supplier) => {
                return <TableBodyRow key={`row-${supplier.id}`} columns={columns} rowData={supplier} />;
            })
        }
        </tbody>
    )
}

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    startIndex: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    endIndex: PropTypes.number.isRequired
};

export default TableBody;

