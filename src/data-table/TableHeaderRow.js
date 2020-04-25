import React from 'react';
import TableColumnHeading from './TableColumnHeading';

function TableHeaderRow(props) {
    return (
        <tr>
            {
                props.columns.map((column) => {
                    return <TableColumnHeading className='center' columnHeading={column.header}/>;
                })
            }
        </tr>
    );
}

export default TableHeaderRow;

