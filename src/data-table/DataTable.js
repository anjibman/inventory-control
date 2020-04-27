// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import suppliers from '../sample-data/suppliers';

import '../supplier/supplier.css';
import TableContent from './content/TableContent';
import TableTop from './top/TableTop';
import TableBottom from './bottom/TableBottom';

const DataTable = () => {
    const DEFAULT_PAGE_SIZE = 20;
    const DEFAULT_PAGE = 1;

    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

    const data = React.useMemo(
        () => suppliers,
        []
    );

    const numPages = Math.ceil(data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = () => {
        const isLastPage = currentPage === numPages;
        return isLastPage ? data.length : pageSize * currentPage;
    };

    const columns = React.useMemo(
        () => [
            {field: 'code', header: 'ID'},
            {field: 'name', header: 'Supplier Name'},
            {field: 'street', header: 'Street'},
            {field: 'city', header: 'City'},
            {field: 'state', header: 'State'},
            {field: 'zipCode', header: 'Zip Code'},
            {field: 'phoneNumber', header: 'Phone'},
            {field: 'email', header: 'Email'},
            {field: 'website', header: 'Website'}
        ],
        []
    );

    const handlePageSizeChange = (pageSize) => {
        setCurrentPage(DEFAULT_PAGE);
        setPageSize(pageSize === 'All' ? data.length : pageSize);
    };

    const handlePaginationChange = (currentPage) => {
        setCurrentPage(currentPage);
    };

    return (
        <div className='supplier-container'>
            <h4>Supplier List</h4>
            <TableTop pageSizeHandler={handlePageSizeChange} pageSize={pageSize}/>
            <TableContent
                columns={columns}
                data={data}
                startIndex={startIndex}
                endIndex={endIndex()}
            />
            <TableBottom
                endIndex={endIndex()}
                numPages={numPages}
                paginationHandler={handlePaginationChange}
                startIndex={startIndex}
                total={data.length}
            />
        </div>
    );
};

export default DataTable;
