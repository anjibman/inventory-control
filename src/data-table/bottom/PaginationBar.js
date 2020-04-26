// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

function PaginationBar(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const numPages = Math.ceil(props.total / props.pageSize);

    const disablePrev = currentPage === 1;
    const disableNext = currentPage === numPages;

    const handlePrev = () => {
        const newPageNum = currentPage - 1;
        setCurrentPage(newPageNum);
        props.paginationHandler(newPageNum);
    };

    const handleNext = () => {
        const newPageNum = currentPage + 1;
        setCurrentPage(newPageNum);
        props.paginationHandler(newPageNum);
    };

    return (
        <Pagination size="sm">
            <Pagination.Item disabled={disablePrev} onClick={handlePrev}>{'Prev'}</Pagination.Item>
            <Pagination.Item disabled={disableNext} onClick={handleNext}>{'Next'}</Pagination.Item>
        </Pagination>
    );
}

PaginationBar.propType = {
    paginationHandler: PropTypes.func.isRequired
};

export default PaginationBar;

