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
                return <TableBodyRow columns={columns} rowData={supplier} />;
            })
        }
        </tbody>
    )
}

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    start: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    end: PropTypes.string.isRequired
};

export default TableBody;

