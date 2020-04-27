import React from 'react';

function TableBodyRow(props) {
    return (
        <tr>
            {
                props.columns.map((col) => {
                    return <td key={`col-${props.rowData[col.id]}-${col.field}`}>{props.rowData[col.field]}</td>
                })
            }
        </tr>
    );
}

export default TableBodyRow;

