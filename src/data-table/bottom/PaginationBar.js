// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';
import {getNumberOfPages} from '../util';

function PaginationBar(props) {
    const disablePrev = props.currentPage === 1;
    const disableNext = props.currentPage === getNumberOfPages(props.total, props.pageSize );

    const handlePrev = () => {
        props.paginationHandler(props.currentPage - 1);
    };

    const handleNext = () => {
        props.paginationHandler(props.currentPage + 1);
    };

    return (
        <Pagination size="sm">
            <Pagination.Item disabled={disablePrev} onClick={handlePrev}>{'Prev'}</Pagination.Item>
            <Pagination.Item disabled={disableNext} onClick={handleNext}>{'Next'}</Pagination.Item>
        </Pagination>
    );
}

PaginationBar.propType = {
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
    pageSize: PropTypes.string.isRequired,
    paginationHandler: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
};

export default PaginationBar;

