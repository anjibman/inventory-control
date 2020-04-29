// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import suppliers from '../sample-data/suppliers';

import '../supplier/supplier.css';
import TableContent from './content/TableContent';
import TableTop from './top/TableTop';
import TableBottom from './bottom/TableBottom';

import _ from 'lodash';

const DataTable = () => {
    const DEFAULT_PAGE_SIZE = 20;
    const DEFAULT_PAGE = 1;
    const data = React.useMemo(
        () => suppliers,
        []
    );

    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
    const [filteredData, setFilteredData] = useState(data);

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
        setPageSize(pageSize === 'All' ? parseInt(filteredData.length, 10) : parseInt(pageSize, 10));
    };

    const handlePaginationChange = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredData = _.filter(suppliers, (sup) => {
            return JSON.stringify(sup).toLowerCase().indexOf(searchText) > -1;
        });

        setFilteredData(filteredData);
    };

    function filterModel(providerList, searchTerms) {
        if (searchTerms) {
            var lowerTerms = searchTerms.toLowerCase();
            return _.filter(providerList, function(pr) {
                return JSON.stringify(pr).toLowerCase().indexOf(lowerTerms) > -1;
            });
        } else {
            return providerList;
        }
    }

    return (
        <div className='supplier-container'>
            <h4>Supplier List</h4>
            <TableTop pageSizeHandler={handlePageSizeChange} pageSize={pageSize} searchHandler={handleSearch}/>
            <TableContent
                columns={columns}
                currentPage={currentPage}
                data={filteredData}
                pageSize={pageSize}
            />
            <TableBottom
                currentPage={currentPage}
                pageSize={pageSize}
                paginationHandler={handlePaginationChange}
                total={filteredData.length}
            />
        </div>

    );
};

export default DataTable;
