import React from 'react';
import * as PropTypes from 'prop-types';

function TableInfo({pageStart, pageEnd, total}) {
    return (
        <p>{`Showing ${pageStart} to ${pageEnd} of ${total} entries`}</p>
    )
}

TableInfo.propTypes = {
    pageStart: PropTypes.string.isRequired,
    pageEnd: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired
};

export default TableInfo;

