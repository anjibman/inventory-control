// Unpublished Work (c) 2020 Deere & Company

import React, {useState} from 'react';
import suppliers from '../sample-data/suppliers';

import '../supplier/supplier.css';
import TableData from './content/TableContent';
import TableTop from './top/TableTop';
import TableBottom from './bottom/TableBottom';
import TableContent from './content/TableContent';

const DataTable = () => {
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
            <TableContent columns={columns} data={data}/>
            <TableBottom/>
        </div>
    );
};

export default DataTable;
