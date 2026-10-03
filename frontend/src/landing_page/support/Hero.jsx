import React from 'react';

function Hero() {
    return (  
        <div className='container-fluid ' id="supportContainer">
            <div className='pb-5 pt-5  mb-4' id='supportSerach'>
                <h4>Support Portal</h4>
               <a className='text-decoration-none' href='#'> My tickets</a>
            </div>
            <div className='row' id='supportSerach'>
                <div className='col '>
                    <h4>Search for an answer or browse help topics<br /> to create a ticket</h4>
                    <input id='supportInput' placeholder='Eg. How do I activate F&O' />
                </div>
                 <div className='col'>
                    <h4> Featured</h4>
                    <a className='text-decoration-none' href='#'>1. Current TakeOvers and delisting</a>
                    <br/>
                    <a className='text-decoration-none' href='#'>2. Latest Intraday leverages - MIS and CO</a>
                    </div> 
            </div>
           
        </div>
    );
}

export default Hero;