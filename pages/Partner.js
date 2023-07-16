import React from 'react';
import p1 from "../public/1.png"
import p2 from "../public/2.png"
import p3 from "../public/3.png"
import p4 from "../public/4.png"
import Image from 'next/image';
const Partner = () => {
    return (
        <div className='container p-5'>
            <h5 className='text-center p-4'>Our Partner</h5>
            <div className='row'>
                <div className='col-md-3 pt-2'>
                <Image className='img-fluid' src={p1} alt='partner'/>
                </div>
                <div className='col-md-3 pt-2'>
                <Image className='img-fluid' src={p2} alt='partner'/>
                </div>
                <div className='col-md-3 pt-2'>
                <Image className='img-fluid' src={p3} alt='partner'/>
                </div>
                <div className='col-md-3 pt-2'>
                <Image className='img-fluid' src={p4} alt='partner'/>
                </div>
            </div>
            
        </div>
    );
};

export default Partner;