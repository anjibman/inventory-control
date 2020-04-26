// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';

function PaginationBar(props) {
    return (
        <Pagination>
            <Pagination.Item>{'Prev'}</Pagination.Item>
            <Pagination.Item>{'Next'}</Pagination.Item>
        </Pagination>
    );
}

export default PaginationBar;

