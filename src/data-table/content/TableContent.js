// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableHead from './header/TableHead';
import TableBody from './body/TableBody';
import {Table} from 'react-bootstrap';

import '../table.css';
import * as PropTypes from 'prop-types';

function TableContent(props) {
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

TableContent.propTypes = {
    columns: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired
};

export default TableContent;
