import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaDollarSign, FaHome, FaUser } from 'react-icons/fa';
import adman from "../public/8.png"
import home from "../public/home.png"
import Image from 'next/image';
const Advisor = () => {
    return (
        <div>
            <div className='section-bg p-5'>
            <h3 className='heading-text text-white'>We are Real Estate Advisors</h3>
            <p className='text-success fw-bold ps-5 pt-3'><Link href="/" className='text-primary'>Home</Link><FaArrowRight/>Advisor</p>
    </div> 
    <div className='container p-5'>
              
                <div className='row'>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaUser className='text-white fs-2'/>
                </div>
                <h4 className='fw-bold text-warning'>Foundedn</h4>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaDollarSign className='text-white fs-2'/>
                </div>
                <h4 className='fw-bold text-warning'>Financials</h4>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                <div className='col-md-4'>
                <div className='thumb'>
                    <FaHome className='text-white fs-2'/>
                </div>
                <h4 className='fw-bold text-warning'>Owner & Developer</h4>
                <p>Our experts answer all queries with their unmatched knowledge at every step of home buying.</p>
            </div>
                </div>
                {/* 2nd part */}
                <div className='row p-5'>
                        <div className='col-md-6 pt-3'>
                        <h3 className='fw-bold pt-5'>Top LocalProfessisonals</h3>
                        <p className='text-muted pt-3'>Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience.</p>
                        <button className='btn btn-success'><Link className='text-white' href="/">Connect Now</Link></button>
                        </div>
                        <div className='col-md-6 pt-3'>
                        <Image alt='adman' src={adman} className='img-fluid shadow rounded'/>
                        </div>
                </div>
                {/* 3rd part */}
                <div className='row p-5'>
                <div className='col-md-6 pt-3'>
                        <Image alt='home' src={home} className='img-fluid shadow rounded'/>
                        </div>
                        <div className='col-md-6 pt-3'>
                        <h3 className='fw-bold pt-5'>Sell your Home for More</h3>
                        <p className='text-muted pt-3'>Partner with a top neighborhood specialist to sell your home. Combined with our high level marketing approach, negotiation skills, technology, transparency, and experience, our concierge service provides results second to none.</p>
                        <button className='btn btn-success'><Link className='text-white' href="/House/Allhouse">Find Out Now</Link></button>
                        </div>
                       
                </div>
            </div>
        </div>
    );
};

export default Advisor;