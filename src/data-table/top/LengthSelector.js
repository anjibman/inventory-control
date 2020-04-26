// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

import '../components.css';

function LengthSelector(props) {
    return (
        <DropdownButton title="Page Size" size="sm">
            <Dropdown.Item href="#/action-1">5</Dropdown.Item>
            <Dropdown.Item href="#/action-2">10</Dropdown.Item>
            <Dropdown.Item href="#/action-3">25</Dropdown.Item>
            <Dropdown.Item href="#/action-3">50</Dropdown.Item>
            <Dropdown.Item href="#/action-3">All</Dropdown.Item>
        </DropdownButton>
    )
}

export default LengthSelector;

