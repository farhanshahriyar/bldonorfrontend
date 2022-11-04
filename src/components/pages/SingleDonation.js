import React from 'react';
import { useParams } from 'react-router-dom';

const SingleDonation = () => {
    const { donationId } = useParams()
    return (
        <div className='my-5'>
            <h1>Information of {donationId}</h1>
            
            





















        </div>
    );
};

export default SingleDonation;