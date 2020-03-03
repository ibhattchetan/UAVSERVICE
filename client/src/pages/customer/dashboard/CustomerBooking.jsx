import React from "react";
import { useSelector, useDispatch } from "react-redux";
function CustomerBooking() {
  const loggedInUser = useSelector(state => state.auth);

  if (!loggedInUser.isAuthenticated) {
    window.location.replace("/login");
  }
  return (
    <div>
      <div>Customer Bookings</div>
    </div>
  );
}

export default CustomerBooking;
