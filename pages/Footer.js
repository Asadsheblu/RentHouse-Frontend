import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-light p-5'>
            <div className='d-flex container'>
            <div>
                <span className='fw-bold text-success'><span className='fs-3'>RENT</span>  <small className='text-muted'>House</small></span>
              
            </div>
            <div className='ms-auto'> 
                <span className=''><span className='fs-6'>FOLLOW US</span> 
                <br/> 
              <span className=''>  <FaFacebook className='text-primary fs-3'/></span>
              <span className=' '>  <FaLinkedin className='text-primary fs-3'/></span>
              <span className=' '>  <FaInstagram className='text-primary fs-3'/></span>
                </span>
              
            </div>
            </div>
            <hr/>
            <p className='text-center fw-bold'> &copy; Copyright Asad Property Made with by <Link className='text-success' href="https://asad-web-devprotfoilo.netlify.app/">AsadSheblu</Link>.</p>
        </div>
    );
};

export default Footer;