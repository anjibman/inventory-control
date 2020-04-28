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
        setPageSize(pageSize === 'All' ? parseInt(data.length, 10) : parseInt(pageSize, 10));
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
                currentPage={currentPage}
                data={data}
                pageSize={pageSize}
            />
            <TableBottom
                currentPage={currentPage}
                pageSize={pageSize}
                paginationHandler={handlePaginationChange}
                total={data.length}
            />
        </div>

    );
};

export default DataTable;
