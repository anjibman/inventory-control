import React from 'react';
import TableHeaderRow from './TableHeaderRow';

function TableHead(props) {
    return (
        <thead>
            <TableHeaderRow columns={props.columns}/>
        </thead>
    );
}

export default TableHead;
