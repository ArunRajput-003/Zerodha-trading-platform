// import React from 'react';

// function Pricing() {
//     return ( 
//         <div className='container' style={{marginTop:"100px"}}>
//             <div className='row'>
//                 <div className='col-4'>
//                     <h2 className='my-4'>Unbeatable pricing</h2>
//                     <p>We pioneered the concept of 
//                         discount broking and price transparency 
//                         in India. Flat fees and no hidden charges.
//                     </p>
//                     <a href='#' className='text-decoration-none'> see pricing <i className="fa-solid fa-arrow-right-long"></i></a>
//                 </div>
//                 <div className="col-8">
//     <div className="row align-items-center justify-content-center mt-4">

//         <div className="col-4 ">
//             <img
//                 src="/media/images/pricing0.svg"
//                 className="img-fluid w-75 h-75"
//                 alt=""
//             />
//             <p >
//                 Free account<br/>
//                 opening
//             </p>
//         </div>

//         <div className="col-4">
//             <img
//                 src="/media/images/pricingEquity.svg"
//                 className="img-fluid w-75 h-75"
//                 alt=""
//             />
//         </div>

//         <div className="col-4">
//             <img
//                 src="/media/images/intradayTrades.svg"
//                 className="img-fluid w-75 h-75"
//                 alt=""
//             />
//         </div>

//     </div>
// </div>
//             </div>
//         </div>
//      );
// }

// export default Pricing;           




import React from "react";

function Pricing() {
  return (
    <div className="container " style={{marginTop:"10%"}}>
      <div className="row">
        <div className="col-4 text-center">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p  style={{paddingLeft:"60px"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6  mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;