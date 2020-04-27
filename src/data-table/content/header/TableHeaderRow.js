// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableColumnHeading from './TableColumnHeading';

function TableHeaderRow(props) {
    return (
        <tr>
            {
                props.columns.map((column) => {
                    return <TableColumnHeading key={`header-${column.header}`} className='center' columnHeading={column.header}/>;
                })
            }
        </tr>
    );
}

export default TableHeaderRow;

