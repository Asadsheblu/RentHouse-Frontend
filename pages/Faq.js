import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import faq from "../public/6.png"
import Image from 'next/image';
const Faq = () => {
    return (
        <div>
             <div className='section-bg p-5'>
            <h3 className='heading-text text-white p-5'>Help Center</h3>
            <p className='text-success fw-bold ps-5'><Link href="/" className='text-primary'>Home</Link><FaArrowRight/>Faq</p>
    </div>
        <div className='container p-5'>
            <div className='row'>
            <div className='col-md-7 pt-5'>
            <h1>Frequently asked questions</h1>
            <small className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

</small>
<div class="accordion pt-4" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Lorem ipsum dolor sit amet, consectetur
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first  accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.  also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item pt-3">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Consectetur adipiscing elit. Sed lobortis
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.  also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item pt-3">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Lorem ipsum dolor sit amet, consectetur
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.  also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item pt-3">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Lorem ipsum dolor sit amet, consectetur
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third  accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.  also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

            </div>
            <div className='col-md-5 p-5'>
                <Image className="img-fluid shadow rounded" src={faq} alt='faq-img'/>
            </div>
            </div>
            {/* updated part */}
            <div className='p-5'>
            <div className='bg-light shadow rounded p-5 text-center'>
                    <h1 className='text-center fw-bold'>Get Updated</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla dui nibh, idhendrerit Suspendisse faucibus nulla accumsan.</p>
                <div className='d-flex'>
                  <div className='mx-auto'>
                  <input type='email' placeholder='Your Email Address' className='form-control w-100'/>
                  <button className='mt-2 btn btn-success'>Submit Now</button>
                  </div>
                   
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Faq;