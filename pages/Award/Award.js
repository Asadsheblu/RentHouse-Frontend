import React from 'react';
import { FaAward, FaBriefcase, FaHeart, FaLightbulb, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
const Award = () => {
    return (
        <div className='award p-5'>
            <h6 className='text-success text-center'>Our Awards</h6>
            <h3 className='text-white text-center ps-5 pe-5'>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h3>
            <div className='row'>
            <div className='col-md-3'>
                    <div className='icon'>
                     <span className='ps-4'>   <FaTrophy className='fs-1 fw-bold'/></span>
                    </div>
                    <h2 className='ps-2 text-center fw-bold text-white pt-2'><CountUp end={32} /> M</h2>
                    <p className='text-center text-muted ps-3 fw-bold'>Blue Burmin Award</p>
            </div>
            <div className='col-md-3'>
            <div className='icon'>
                     <span className='ps-4'>   <FaBriefcase className='fs-1 fw-bold'/></span>
                    </div>
                    <h2 className='ps-2 text-center fw-bold text-white pt-2'><CountUp end={43} /> M</h2>
                    <p className='text-center text-muted ps-3 fw-bold'>Mimo X11 Award</p>
            </div>
            <div className='col-md-3'>
            <div className='icon'>
                     <span className='ps-4'>   <FaLightbulb className='fs-1 fw-bold'/></span>
                    </div>
                    <h2 className='ps-2 text-center fw-bold text-white pt-2'><CountUp end={51} /> M</h2>
                    <p className='text-center text-muted ps-3 fw-bold'>Australian UGC Award</p>
            </div>
            <div className='col-md-3'>
            <div className='icon'>
                     <span className='ps-4'>   <FaHeart className='fs-1 fw-bold'/></span>
                    </div>
                    <h2 className='ps-2 text-center fw-bold text-white pt-2'><CountUp end={42} /> M</h2>
                    <p className='text-center text-muted ps-3 fw-bold'>IITCA Green Award</p>
            </div>
            </div>
        </div>
    );
};

export default Award;