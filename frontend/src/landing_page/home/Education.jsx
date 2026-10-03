import React from 'react';

function Education() {
    return ( 
       <div className='container' style={{marginTop:"8%"}}>
        <div className='row'>
          <div className='col-4'>
            <img src='/media/images/education.svg' className='ps-4' ></img>
          </div>
          <div className='col-2'></div>
          <div className='col-6'>
            <h2 className='my-4'>Free and open market education</h2>
            <p>Varsity, the largest online stock market education book 
              in the world covering everything from 
              the basics to advanced trading.</p>
              <a href='#'>Varsity  <i className="fa-solid fa-arrow-right-long"></i></a>
              <p className='my-4'>TradingQ&A, the most active trading and 
                investment community in India for all your
                 market related queries.</p>
                 <a href='#'>TradingQ&A <i className="fa-solid fa-arrow-right-long"> </i></a>
          </div>
        </div>
       </div>
     );
}

export default Education;