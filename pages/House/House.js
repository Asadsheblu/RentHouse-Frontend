import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaHeart, FaLocationArrow, FaSearch, FaSearchDollar } from 'react-icons/fa';
const House = () => {
    const [houses,sethouses]=useState([])
    useEffect(()=>{
        fetch('https://renthouse-backend.onrender.com/house')
        .then(res=>res.json())
        .then(data=>{
            sethouses(data)
           
        })
    },[])
    return (
        <div className='container p-5 house'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
 
                    {
                     houses.slice(0,6).map(house=><>
                      <div class="col">
                      <div class="card h-100 shadow rounded">
      <Image src={house?.img} class="card-img-top img-fluid " alt="house-img"/>
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
<div className='d-flex pt-3'>
<button className='btn btn-success text-black  rounded ms-auto'><Link className='text-white' href="/House/Allhouse">Load More Package <FaArrowRight/></Link></button>
</div>
        </div>
    );
};

export default House;