import React from 'react';
import { FaBeer, FaSearch } from "react-icons/fa"
const Banner = () => {
    return (
        <div className='banner p-5'>
            <h1 className='text-center pt-5 head-text text-white pb-3'> Search Your Next Home</h1>
            <p className='text-center text-white'>Find new & featured property located in your local city.</p>
        <div className='container bg-white shadow rounded p-3'>
            <div className='row'>
            <div className='col-md-3'>
                <small className='text-muted'>City/Street</small>
                <input type='text' className='form-control'placeholder='Location'/>
            </div>
            <div className='col-md-3'>
            <small className='text-muted'>Property Type</small>
                <input type='text' className='form-control'placeholder='Property Type'/>
            </div>
          
            <div className='col-md-3'>
            <small className='text-muted'>Price Range</small>
                <input type='number' className='form-control' placeholder='Price Range'/>
            </div>
            <div className='col-md-3'>
            <small className='text-muted'>Advance Filter</small>
            <br/>
                <button className='btn btn-success'><FaSearch/></button>
            </div>
            </div>
        </div>
        </div>
       
    );
};

export default Banner;