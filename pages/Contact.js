import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
           <div className='text-center'>
           <span className='fs-1 fw-bold'>We Are Available For You 24/7</span>
           </div>
           <div className='row p-5'>
            {/* Location add */}
            <div className='col-md-7'>
            <iframe width="540" height="350" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC871wKM6aoCLSV_pT3xBVsYzNGXaDh7Pw&amp;q=121King+St,Melbourne+VIC+3000,Australia" allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div className='col-md-5'>
            <form>
            <div class="form-group">
    <label for="exampleInputPassword1">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Name"/>
    </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
     </div>
     <div class="form-group">
    <label for="exampleInputPassword1">Enter Contact Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Contact No"/>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Explain Your Comment</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
     <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
            </div>
           </div>
          
        </div>
    );
};

export default Contact;