import React from 'react';
import TableBodyRow from './TableBodyRow';

function TableBody(props) {
    return (
        <tbody>
        {
            props.data.map((supplier) => {
                return <TableBodyRow columns={props.columns} rowData={supplier} />;
            })
        }
        </tbody>
    )
}

export default TableBody;

