import React from 'react';
import {FormControl} from 'react-bootstrap';

import './components.css';

function SearchBar(props) {
    return (
        <FormControl className="form-control-sm search-bar" placeholder="Search"/>
    );
}

export default SearchBar;

