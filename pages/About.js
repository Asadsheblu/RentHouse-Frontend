import React from 'react';
import amen from "../public/7.png"
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const About = () => {
    return (
        <>
    <div className='section-bg p-5'>
            <h3 className='heading-text text-white p-5'>About Us</h3>
            <p className='text-success fw-bold ps-5'><Link href="/" className='text-primary'>Home</Link><FaArrowRight/>About</p>
    </div>
        <div className='container'>
            <div className='row p-5'>
                <div className='col-md-4'>
                    <h1 className='text-warning fw-bold'>01</h1>
                    <h5>Our Mission</h5>
                    <small className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi</small>
                </div>
                <div className='col-md-4'>
                <h1 className='text-warning fw-bold'>02</h1>
                    <h5>Our Approach</h5>
                    <small className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi</small>
                </div>
                <div className='col-md-4'>
                <h1 className='text-warning fw-bold'>03</h1>
                    <h5>Our Philosophy</h5>
                    <small className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae venenatis mi</small>
                </div>
            </div>
            {/* ABout section */}
            <div className='row p-5'>
            <div className='col-md-6'>
            <div className='shape-image'>
                <Image className='img-fluid shadow-img' src={amen} alt='about-man'/>
            </div>
            </div>
            <div className='col-md-6 p-5'>
           <h6 className='pt-5'>About Us</h6>
           <h2 className='fw-bold'>We Are Dynamic Team And Business Agency</h2>
           <p className='text-muted'>Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience.</p>
           <button className='btn btn-warning rounded p-2 fw-bold'>More Services</button>
            </div>

            </div>
        </div>
        </>
    );
};

export default About;