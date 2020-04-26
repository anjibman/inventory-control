// Unpublished Work (c) 2020 Deere & Company

import React from 'react';
import TableBodyRow from './TableBodyRow';
import * as PropTypes from 'prop-types';

function TableBody(props) {
    const { columns, pageSize, currentPage, data} = props;
    const numPages = Math.ceil(data.length / pageSize);
    const isLastPage = currentPage === numPages;
    const end =  isLastPage ? data.length : pageSize * currentPage;
    const start = (currentPage - 1) * pageSize;

    return (
        <tbody>
        {
            data.slice(start, end).map((supplier) => {
                return <TableBodyRow columns={columns} rowData={supplier} />;
            })
        }
        </tbody>
    )
}

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    currentPage: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    pageStart: PropTypes.string.isRequired
};

export default TableBody;

