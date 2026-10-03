import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
        <div className="row text-center">
          
          <h3 className="mt-5">Open a Zerodha account</h3>
          <p className='fs-6 my-3'>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mt-3 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
     );
}

export default OpenAccount;