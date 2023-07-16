import React from 'react';
import { FaDollarSign, FaHome, FaUser } from 'react-icons/fa';

const Choose = () => {
    return (
        <div className='choose'>
            <div className='container p-5'>
                <h5 className='text-center pb-3'>Why Choose Us</h5>
                <div className='row'>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaUser className='text-white fs-2'/>
                </div>
                <h6 className='fw-bold text-warning'>Sell, Rent Property Free</h6>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaDollarSign className='text-white fs-2'/>
                </div>
                <h6 className='fw-bold text-warning'>In-depth Info on Investment Hotspots</h6>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaHome className='text-white fs-2'/>
                </div>
                <h6 className='fw-bold text-warning'>Pool of Best Property Options</h6>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default Choose;