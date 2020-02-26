import React, { useState, useEffect } from "react";
import "./allpartner.styles.scss";
import profileImg from "../../assests/profile.png";
import { Link } from "react-router-dom";
import axios from "axios";

function AllPartner() {
  const [partners, setPartners] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/api/partner").then(result => setPartners(result.data));
    axios.get("/api/review").then(rev => setReviews(rev.data));
  }, []);

  if (!partners) {
    return <div>Data Loading</div>;
  }
  if (!reviews) {
    return <div>Data Loading</div>;
  } else {
    return (
      <div className="partner-wrapper">
        {partners.map(item => {
          return (
            <div key={item.user_id}>
              <div className="row">
                <img className="col-2 partner-image" src={profileImg} />
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
                <div className="row reviews">
                  <div className="col-1">
                    <img className="review-image" src={profileImg} />
                  </div>
                  <div className="col-9">
                    <span>Name</span> &nbsp;
                    <span>4.6</span>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      At voluptates possimus ab praesentium suscipit.
                    </div>
                  </div>
                  <div className="col-2">14/02/2020</div>
                </div>
                <div className="row reviews">
                  <div className="col-1">
                    <img className="review-image" src={profileImg} />
                  </div>
                  <div className="col-9">
                    <span>Name</span> &nbsp;
                    <span>4.6</span>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      At voluptates possimus ab praesentium suscipit.
                    </div>
                  </div>
                  <div className="col-2">14/02/2020</div>
                </div>
              </div>

              <div className="horizontl-line">
                <hr />
              </div>
            </div>
          );
        })}
        <div className="partner-pagination">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="/">
                  First
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="/">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="/">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="/">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="/">
                  Last
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default AllPartner;
