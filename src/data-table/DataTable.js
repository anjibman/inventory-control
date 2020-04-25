import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import {Table} from 'react-bootstrap';

import './table.css';

function DataTable(props) {
    return (
        <Table responsive striped bordered hover>
            <TableHead columns={props.columns}/>
            <TableBody columns={props.columns} data={props.data}/>
        </Table>
    );
}

export default DataTable;
