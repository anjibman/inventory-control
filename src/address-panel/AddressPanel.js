import React from 'react';
import './address-panel.css';

function AddressPanel(props) {
    return (
        <section className={'address-panel'}>
            <p>{props.address.street}</p>
            <p>{props.address.city}, {props.address.state} {props.address.zipCode}</p>
        </section>
    )
}

export default AddressPanel;

