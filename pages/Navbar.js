import Link from 'next/link';
import React from 'react';
import { FaPlus, FaSearch, FaSearchDollar } from 'react-icons/fa';
// import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  //  const [session,loading] =useSession()
  //  console.log(session,loading);
  
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">SearchHouse<FaSearch/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Faq">FAQ</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" href="/Advisor">ADVISOR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Contact">CONTACT</Link>
        </li>
       
          </ul>
   
      
        <button className="btn btn-success" type="submit"><Link className='text-white' href="/admin/Houseadd">Add Listing <FaPlus/></Link></button>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;