import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="/media/images/kite.png"
        heading="Kite"
        description={
          <>
            Our ultra-fast flagship trading platform<br/> with streaming
            market data,
            advanced charts, <br/> an elegant UI, and more.
           
             <br />Enjoy the Kite experience seamlessly on your 
            <br/>Android and iOS
            devices.
          </>
        }
        tryDemoLink="//#region "
        tryDemoHeading="Try demo"
        learnMoreLink="#"
        learnMoreHeading="Learn more"
        googlePlay="#"
        appStore="#"
      />

       <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        heading="Coin"
        description={
          <>
            Buy direct mutual funds online, commission-free,<br/>
             delivered directly to your Demat account. <br/>
             Enjoy the investment experience on your Android
             <br/> and iOS devices.
          </>
        }
        tryDemoLink="//#region "
        tryDemoHeading="Try demo"
        learnMoreLink="#"
        learnMoreHeading="Learn more"
        googlePlay="#"
        appStore="#"
      />
      
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        heading="Varsity mobile"
        description={
          <>
            An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
          </>
        }
        tryDemoLink="//#region "
        tryDemoHeading="Try demo"
        learnMoreLink="#"
        learnMoreHeading="Learn more"
        googlePlay="#"
        appStore="#"
      />
       
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
        <Universe />
    </>
  );
}

export default ProductPage;
