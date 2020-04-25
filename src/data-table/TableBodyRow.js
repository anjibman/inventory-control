import React from 'react';

function TableBodyRow(props) {
    return (
        <tr>
            {
                props.columns.map((col) => {
                    return <td>{props.rowData[col.field]}</td>
                })
            }
        </tr>
    );
}

export default TableBodyRow;

