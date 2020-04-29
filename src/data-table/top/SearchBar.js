// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import * as PropTypes from 'prop-types';
import {FormControl} from 'react-bootstrap';

import '../components.css';

function SearchBar(props) {
    return (
        <FormControl className="form-control-sm search-bar" placeholder="Search" onChange={props.searchHandler}/>
    );
}

SearchBar.propTypes = {
    searchHandler: PropTypes.func.isRequired
};

export default SearchBar;

