import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import {SessionProvider, useSession} from "next-auth/react"
import { useRouter } from 'next/router';
const Houseadd = () => {


  // const {data:session}=useSession()
  // const router=useRouter()
//  useEffect(()=>{
//   if(!session) router.push('/Reg/Login')
//  },[router,session])
  const imageKey="e8ca8a640563b5725a2d73fc6920af02"
  const addHouse=(e)=>{
    e.preventDefault()
    
    const title=e.target.title.value
    const category=e.target.category.value
    const price=e.target.price.value
    const description=e.target.description.value
    const location=e.target.location.value
    const name=e.target.name.value
    const phone=e.target.phone.value
    const email=e.target.email.value
    const image=e.target.image.files[0]
    const data=[title,name,category,price,description,location,phone,email,image]
console.log(data);
    const formData=new FormData()
    formData.append('image',image)
    const url=`https://api.imgbb.com/1/upload?key=${imageKey}`
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.success){
        const img=data.data.url
       
        const upload={
          name:name,
          category:category,
          price:price,
          location:location,
          email:email,
          phone:phone,
          title:title,
          description:description,
          img:img
        }
      fetch('https://renthouse-backend.onrender.com/house',{
        method:"POST",
        headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(upload)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          window.location.reload()
         
          
      }
      })
      }
    })
    
  }
    return (
       <>
       <div className='section-bg p-5'>
       <Head>
        <title>RENT- Admin Dashboard</title>
        <meta name="description" content="Generated by FERI Trending Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h3 className='heading-text text-white p-5'>House Add</h3>
            <p className='text-success fw-bold ps-5'><Link href="/" className='text-primary'>Home</Link><FaArrowRight/>Houseadd</p>
    </div>
      
  
        <div className='container p-5 mt-5 shadow bg-dark text-white'>
           
          <form onSubmit={addHouse}>
  <div className="form-group">
    <label for="exampleFormControlInput1">House Title</label>
    <input type="text" name='title' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">House Location</label>
    <input type="text" name='location' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  
  <div className="form-group">
  <label for="exampleFormControlInput1">House Category</label>
      <select name="category" className="form-control w-75" >
      <option value="">Select Category</option>
      <option value="Family House">Family House</option>
      <option value="House & Villa">House & Villa</option>
      <option value="Apartment"> Apartment </option>
      <option value="Office & Studio">Office & Studio</option>
     
    </select>
  </div>
 
  
  
  <div className="form-group">
    <label for="exampleFormControlInput1">House Price</label>
    <input type="number" name='price' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">House Author Name</label>
    <input type="text" name='name' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Author Number</label>
    <input type="number" name='phone' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlInput1">Author Email</label>
    <input type="email" name='email' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
 
  
  <div className="form-group">
    <label for="exampleFormControlInput1">House Image</label>
    <input type='file' name='image' className="form-control w-75" id="exampleFormControlInput1"/>
  </div>
 
  

  <div className="form-group">
    <label for="exampleFormControlTextarea1">House Description</label>
    <textarea className="form-control w-75" name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <div className="form-group">
 <button className='btn btn-info fw-bold'>Upload</button>
  </div>
</form>
        </div>
        </>
    );
};

export default Houseadd;
