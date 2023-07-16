import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaHeart, FaLocationArrow } from 'react-icons/fa';

const Allhouse = () => {
    const [houses,sethouses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/house')
        .then(res=>res.json())
        .then(data=>{
            sethouses(data)
           
        })
    },[])
    return (
        <>
       <div className='section-bg p-5'>
            <h3 className='heading-text text-white p-5'>All House</h3>
            <p className='text-success fw-bold ps-5'><Link href="/" className='text-primary'>Home</Link><FaArrowRight/>Allhouse</p>
    </div>
        <div className='container p-5 house'>
        <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                 houses.map(house=><>
                  <div class="col">
                  <div class="card h-100 shadow rounded">
  <img src={house?.img} class="card-img-top img-fluid " alt="house-img"/>
  <div class="card-body ps-3">
   <div className='d-flex'>
   <span className='bg-dark text-white rounded ps-2 pe-2 pt-1 pb-1'>For Rent</span>
    <span className='ms-auto'><FaHeart className='fs-4 heart'/></span>
   </div>
    <h6 class="card-title pt-2">{house?.title}</h6>
    <p class="card-text"><FaLocationArrow/> {house?.location}</p>
  </div>
  <div class="card-footer">
  <div className='d-flex'>
   <button className='btn btn-success text-white rounded-pill ps-4 pe-4 pt-2 pb-2'>
   <Link className='text-white' href={'/House/'+ house?._id} key={house?._id}> {house?.price} <span className='fs-5'>৳</span>/sqft</Link>
   
    </button>
    <span className='ms-auto fw-bold'>{house?.category}</span>
   </div>
  </div>
</div>
</div>
                 </>)   
                }


</div>

    </div>
    </>
    );
};

export default Allhouse;