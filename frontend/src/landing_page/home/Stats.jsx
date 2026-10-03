import React from 'react';

function Stats() {
    return ( 
         <div className='container ' style={{marginTop:"100px"}}>
            <div className='row ms-5 ps-4'>
                <div className='col-4'>
                   
                        <h2 className='mt-2 mb-5'>Trust with confidence</h2>
                  
                    
                    <div className='my-4'>
                        <h3 className='fw-normal'>Customer-first always</h3>
                        <p className='fs-6'>That's why 1.6+ crore customers trust Zerodha with ~ 
                            ₹6 lakh crores of equity investments, 
                            making us India’s largest broker; contributing to 15% of 
                            daily retail exchange volumes in India.
                            </p>
                    </div>
                    <div className='my-4'>
                        <h3 className='fw-normal  text-decoration-none' >No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", 
                            or annoying push notifications. 
                            igh quality apps that you use at your pace,
                             the way you like. 
                             <a href='#' className='text-decoration-none'>Our philosophies.</a>
                            </p>
                    </div>
                    <div className='my-4'>
                        <h3 className='fw-normal' >The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem.
                             Our investments in 30+ fintech startups 
                             offer you tailored services specific to
                              your needs.
                            </p>
                    </div>
                    <div className='my-4'>
                        <h3 className='fw-normal' >Do better with money</h3>
                        <p>With initiatives like <a href='#' className='text-decoration-none'>Nudge
                            </a> and <a href='Kill Switch' className='text-decoration-none'>Kill Switch</a>, 
                            we don't just 
                            facilitate transactions, but actively help you do 
                            better with your money.
                            </p>
                    </div>
                </div>
                <div className='col-8 mt-5'>
                    <div className=' '>
                        <img src='/media/images/ecosystem.png' className=' h-75 ms-5' style={{width:"75%"}}></img>
                        <div className='row ms-2 mt-2'>
                            <div className='col-6 d-flex justify-content-center '>
                                <a href='' className='text-decoration-none fs-6'>Explore our products 
                                    <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                            <div className='col-6 '>
                                <a href='#' className='text-decoration-none fs-6'>Try kite demo 
                                    <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>                       
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Stats;