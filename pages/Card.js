import Link from 'next/link';
import React from 'react';
import { FaHome, FaHospital } from 'react-icons/fa';

const Card = () => {
    return (
        <div className='container p-5'>
            <div className='row'>
            <div className='col-md-6 p-2'>
            <Link href="/House/Allhouse" className='card bg-primary text-white p-2'>
                    <div className='row'>
                        <div className='col-md-4 pt-3  text-center'>
                            <FaHome className='c-icon'/>
                        </div>
                        <div className='col-md-8 p-3'>
                            <h5>Looking for the new home?</h5>
                            <small>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</small>
                        </div>
                    </div>
                </Link>
                </div>
            <div className='col-md-6 p-2'>
            <Link href="/admin/Houseadd" className='card bg-success text-white p-2'>
                    <div className='row'>
                        <div className='col-md-4 pt-3  text-center'>
                            <FaHospital className='c-icon'/>
                        </div>
                        <div className='col-md-8 p-3'>
                            <h5>Want To Sell Your home?</h5>
                            <small>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</small>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Card;