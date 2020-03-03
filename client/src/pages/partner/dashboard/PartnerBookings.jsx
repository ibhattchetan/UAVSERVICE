import React from "react";
import { useSelector, useDispatch } from "react-redux";

function PartnerBookings() {
  const loggedInUser = useSelector(state => state.auth);

  if (!loggedInUser.isAuthenticated) {
    window.location.replace("/login");
  }
  return (
    <div>
      <div>Partner Bookings</div>
    </div>
  );
}

export default PartnerBookings;
