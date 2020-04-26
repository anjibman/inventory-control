// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableHead from './header/TableHead';
import TableBody from './body/TableBody';
import {Table} from 'react-bootstrap';

import '../table.css';
import * as PropTypes from 'prop-types';

function TableData(props) {
    return (
        <Table responsive striped bordered hover>
            <TableHead columns={props.columns}/>
            <TableBody
                columns={props.columns}
                currentPage={props.currentPage}
                data={props.data}
                pageSize={props.pageSize}
            />
        </Table>
    );
}

TableData.propTypes = {
    columns: PropTypes.array.isRequired,
    currentPage: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    pageStart: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired
};

export default TableData;
