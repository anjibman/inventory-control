import React from 'react';
import * as PropTypes from 'prop-types';

function TableInfo({startIndex, endIndex, total}) {
    return (
        <p>{`Showing ${startIndex + 1} to ${endIndex} of ${total} entries`}</p>
    )
}

TableInfo.propTypes = {
    endIndex: PropTypes.number.isRequired,
    startIndex: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default TableInfo;

