import React from 'react';
import * as PropTypes from 'prop-types';
import {getEndIndex, getStartIndex} from '../util';

function TableInfo({currentPage, pageSize, total}) {
    return (
        <p>{`Showing ${getStartIndex(currentPage, pageSize) + 1} to ${getEndIndex(total, currentPage, pageSize)} of ${total} entries`}</p>
    );
}

TableInfo.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default TableInfo;

