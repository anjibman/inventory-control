import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';

function PaginationBar(props) {
    const [total, setTotal] = useState(props.total);
    const [pageSize, setPageSize] = useState(props.pageSize);
    const [activePage, setActivepage] = useState(1);

    const itemSize = Math.ceil(total/pageSize);
    let items = [];
    for (let number = 1; number <= itemSize; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination>{items}</Pagination>
    );
}

export default PaginationBar;

