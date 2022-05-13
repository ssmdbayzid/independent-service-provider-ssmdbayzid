import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const Id = useParams(id)

    return (
        <div>
            <h1> Service Id: {Id} </h1>
        </div>
    );
};

export default Checkout;