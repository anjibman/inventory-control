// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Dropdown, DropdownButton} from 'react-bootstrap';

import '../components.css';

function LengthSelector(props) {
    const [selectedPageLength, setSelectedPageLength] = useState(props.pageSize);

    const handlePageSelector = (e) => {
        setSelectedPageLength(e.target.textContent);
        props.pageSizeHandler(e.target.textContent);
    };

    return (
        <DropdownButton id="page-length" title={selectedPageLength} size="sm" className="length-dropdown">
            <Dropdown.Item onClick={handlePageSelector}>20</Dropdown.Item>
            <Dropdown.Item onClick={handlePageSelector}>50</Dropdown.Item>
            <Dropdown.Item onClick={handlePageSelector}>100</Dropdown.Item>
            <Dropdown.Item onClick={handlePageSelector}>All</Dropdown.Item>
        </DropdownButton>
    );
}

LengthSelector.propTypes = {
    pageSizeHandler: PropTypes.func.isRequired
};

export default LengthSelector;

