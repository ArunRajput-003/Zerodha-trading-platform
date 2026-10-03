import React from 'react';

function Hero() {
    return ( 
        <div className='text-center border-bottom pb-5' style={{marginTop:"6rem" , marginBottom:"6rem"}}>
            <h2 className='text-muted'>Zerodha Products</h2>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
            <p className='fs-6'>Check out our &nbsp;
                  <a className='text-decoration-none' href="#">
                    investment offerings 
                   
                 </a>
            </p>
        </div>
     );
}

export default Hero;