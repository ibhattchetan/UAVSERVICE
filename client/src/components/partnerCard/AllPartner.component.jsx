import React, { useState, useEffect } from "react";
import "./allpartner.styles.scss";
import profileImg from "../../assests/profile.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import convertDate from "../../utils/convertToDate";
import Pagination from "../Pagination";
import Nodata from "../Nodata";

function AllPartner(props) {
  const [partners, setPartners] = useState([]);
  const [pagination, setPagination] = useState({});
  const cat = props.match.params.name;
  const loggedInUser = useSelector(state => state.auth);

  let city = loggedInUser.currentLocation;

  useEffect(() => {
    axios
      .get(
        "/api/partner/partnerdetails?services=" +
          cat +
          "&cityName=" +
          city +
          "&page=1"
      )
      .then(result => {
        setPartners(result.data.result);
        setPagination(result.data.pageInfo);
      });
  }, [cat]);

  if (!partners) {
    return <div>Data Loading</div>;
  } else {
    return (
      <div className="partner-wrapper">
        {partners.map(item => {
          return (
            <div key={item.user_id}>
              <div className="row">
                <img
                  className="col-2 partner-image"
                  src={profileImg}
                  alt="partner-profile"
                />
                <div className="col-4 partner-info bdr-right">
                  <h5>{item.user.name}</h5>
                  <div>
                    {item.services[0]} Expert , {item.currentLocation[0]}
                  </div>
                  <div className="ratings">
                    <Link
                      className="view-prifile-link"
                      to={`/partner/${item.user_id}`}
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="col-3 overallRating">
                  <h3>4.5</h3>
                  <div>Overall Rating</div>
                </div>
                <div className="col-2 book-now-btn">
                  <h3>{item.jobsCompleted}</h3>
                  <div>Jobs Complited</div>
                </div>
              </div>

              <div className="customer-review-all">
                {item.reviews.map(rev => {
                  return (
                    <div key={rev.id} className="row reviews">
                      <div className="col-1">
                        <img
                          className="review-image"
                          src={profileImg}
                          alt="partner-profile"
                        />
                      </div>
                      <div className="col-9">
                        <span>{rev.user.name}</span> &nbsp;
                        <span>{rev.rating}</span>
                        <div>{rev.comment}</div>
                      </div>
                      <div className="col-2">{convertDate(rev.createdAt)}</div>
                    </div>
                  );
                })}
              </div>

              <div className="horizontl-line">
                <hr />
              </div>
            </div>
          );
        })}
        {pagination.lastPage === 0 ? (
          <Nodata />
        ) : (
          <Pagination
            firstPage={pagination.firstPage ? pagination.firstPage : null}
            prevPage={pagination.prevPage ? pagination.prevPage : null}
            currPage={pagination.currPage ? pagination.currPage : null}
            nextPage={pagination.nextPage ? pagination.nextPage : null}
            lastPage={pagination.lastPage ? pagination.lastPage : null}
          />
        )}
      </div>
    );
  }
}

export default AllPartner;
