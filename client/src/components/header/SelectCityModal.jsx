import React, { useState } from "react";
import "./selectCity.styles.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";

function SelectCityModal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const loggedInUser = useSelector(state => state.auth);
  let city;
  if (loggedInUser.isAuthenticated) {
    city = loggedInUser.currentLocation;
  } else {
    city = "Bangalore";
  }

  return (
    <div>
      <div className="select-city" onClick={toggleModal}>
        {city} &nbsp;&nbsp;
        <i className="fas fa-chevron-down"></i>
      </div>
      <Modal className="my-modal" isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Choose your preferred city
        </ModalHeader>
        <ModalBody>
          <div>
            <div className="select-city-ul">
              <div className="city-name">Jodhpur</div>
              <div className="city-name">Jaipur</div>
              <div className="city-name">Bangalore</div>
              <div className="city-name">Pune</div>
              <div className="city-name">Mumbai</div>
              <div className="city-name">Delhi</div>
              <div className="city-name">Haydrabad</div>
              <div className="city-name">Chandigarh</div>
              <div className="city-name">Ahemdabad</div>
              <div className="city-name">Panji</div>
              <div className="city-name">Chennai</div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SelectCityModal;
