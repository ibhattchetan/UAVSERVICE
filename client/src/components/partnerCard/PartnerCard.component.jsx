import React, { useState, useEffect } from "react";
import "./partnerCard.styles.scss";
import axios from "axios";
import profileImg from "../../assests/profile.png";

import convertDate from "../../utils/convertToDate";

function PartnerCard(props) {
  const [partner, setPartner] = useState();
  const [reviews, setReviews] = useState();
  let partnerID = props.match.params.partnerId;
  useEffect(() => {
    axios
      .get("/api/partner/" + partnerID)
      .then(result => setPartner(result.data))
      .catch(err => console.log(err));
    axios
      .get("/api/review/" + partnerID)
      .then(result => setReviews(result.data))
      .catch(err => console.log(err));
  }, []);

  if (!partner) {
    return <div>Loading User Data...</div>;
  }
  if (!reviews) {
    return <div>Loading User Data...</div>;
  } else {
    return (
      <div className="partner-wrapper">
        <div className="row">
          <img className="col-2 partner-image" src={profileImg} />
          <div className="col-4 partner-info">
            <h5>{partner.user.name}</h5>
            <div>{partner.services[0]} Expert</div>
            <div className="ratings">
              <strong>{partner.jobsCompleted} &nbsp;</strong> Jobs Completed
            </div>
          </div>
          <div className="col-4 area-expertise">
            <strong>Area of Expertise</strong>
            <br />
            {partner.services.map(item => {
              return <span>{item} </span>;
            })}
            <br />
            <strong>Location : </strong>
            {partner.currentLocation.map(item => {
              return <span>{item} </span>;
            })}
          </div>
          <div className="col-2 book-now-btn">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
        <div className="horizontl-line">
          <hr />
        </div>
        <div className="customer-review">
          <strong>Customer Reviews</strong>
          {reviews.map(item => {
            return (
              <div className="row reviews">
                <div className="col-1">
                  <img className="review-image" src={profileImg} />
                </div>
                <div className="col-9">
                  <span>{item.user.name}</span> &nbsp;
                  <span>{item.rating}</span>
                  <div>{item.comment}</div>
                </div>
                <div className="col-2">{convertDate(item.createdAt)}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PartnerCard;
