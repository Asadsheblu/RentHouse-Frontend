import React, { useEffect, useState } from 'react';

const Category = () => {
    const [catyegory,setcategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/house')
        .then(res=>res.json())
        .then(data=>{
            setcategory(data)
           
        })
    },[])
    return (
        <div className='category'>
            <div className='container'>
            <div className='row'>
              

           
                      <div className='col-md-3p-4'>
                    <div className='card shadow bg-white rounded'>
                            <h6 className=''></h6>
                    </div>
                    </div>
                   
            </div>
            </div>
        </div>
    );
};

export default Category;