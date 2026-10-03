import React from "react";

function LeftSection({
  imageUrl,
  heading,
  description,
  tryDemoLink,
  tryDemoHeading,
  learnMoreLink,
  learnMoreHeading,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container   " >
      <div className="row ms-5 pt-5 mb-4 mt-4">
        <div className="col-7 ms-5 mb-5 ">
          <img className="me-3" src={imageUrl}></img>
        </div>

        <div className="col-4">
          <div className="ms-4 mt-5">
            <h2 className="my-4">{heading}</h2>
            <p className="lh-lg mb-3">{description}</p>
            <p className="mb-3 pb-3">
              <a className="text-decoration-none" href={tryDemoLink}>{tryDemoHeading}  <i className="fa-solid fa-arrow-right-long" /></a> &nbsp; &nbsp;
               <a className="text-decoration-none" href={learnMoreLink}>{learnMoreHeading} <i className="fa-solid fa-arrow-right-long" /></a>
            </p>
            <p>
            <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg"></img></a> &nbsp; &nbsp;
            <a href={appStore}><img src="/media/images/appstoreBadge.svg"></img></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
