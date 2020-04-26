import React from 'react';
import * as PropTypes from 'prop-types';

function TableInfo({startIndex, endIndex, total}) {
    return (
        <p>{`Showing ${startIndex + 1} to ${endIndex} of ${total} entries`}</p>
    )
}

TableInfo.propTypes = {
    endIndex: PropTypes.string.isRequired,
    startIndex: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired
};

export default TableInfo;

