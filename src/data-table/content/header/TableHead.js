// Unpublished Work (c) 2020 Deere & Company

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
