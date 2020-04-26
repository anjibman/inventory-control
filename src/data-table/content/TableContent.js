// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableHead from './header/TableHead';
import TableBody from './body/TableBody';
import {Table} from 'react-bootstrap';

import '../table.css';

function TableData(props) {
    return (
        <Table responsive striped bordered hover>
            <TableHead columns={props.columns}/>
            <TableBody columns={props.columns} data={props.data}/>
        </Table>
    );
}

export default TableData;
