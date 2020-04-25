import React, {useState} from 'react';
import suppliers from '../sample-data/suppliers';

import './supplier.css';
import DataTable from '../data-table/DataTable';
import SearchBar from '../components/SearchBar';
import LengthSelector from '../components/LengthSelector';
import PaginationBar from '../components/Pagination';
import TableTop from '../data-table/TableTop';

const SupplierTable = () => {
    const DEFAULT_PAGE_SIZE = 5;
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

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

    return (
        <div className='supplier-container'>
            <h1>Supplier List</h1>
            <TableTop/>
            <DataTable columns={columns} data={data}/>
            <PaginationBar total={data.length} pageSize={5}/>
        </div>
    );
};

export default SupplierTable;
