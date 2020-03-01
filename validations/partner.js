const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = validatePartnerProfileUpdate = data => {
  let errors = {};

  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.services = !isEmpty(data.services) ? data.services : [];
  data.ratePerHour = !isEmpty(data.ratePerHour) ? data.ratePerHour : [];
  data.currentLocation = !isEmpty(data.currentLocation)
    ? data.currentLocation
    : [];

  // phone number Validation

  if (data.currentLocation.length === 0) {
    errors.currentLocation = "Current City is required";
  }

  // if (!Validator.isEmpty(data.services)) {
  //   let input = data.services.split(",");
  //   console.log("Input Service Types : ", input);
  //   for (let index = 0; index < input.length; index++) {
  //     if (
  //       !Validator.equals(input[index], "Plumbing") &&
  //       !Validator.equals(input[index], "Carpentry") &&
  //       !Validator.equals(input[index], "Cleaning") &&
  //       !Validator.equals(input[index], "Electrical") &&
  //       !Validator.equals(input[index], "Appliances") &&
  //       !Validator.equals(input[index], "Painting")
  //     ) {
  //       errors.services = "Invalid Service Type";
  //     }
  //   }
  // }

  if (data.currentLocation.length === 0) {
    errors.currentLocation = "Cities are required";
  }

  if (data.services.length === 0) {
    errors.services = "Services are required";
  }

  if (
    !Validator.isMobilePhone(data.phoneNumber) ||
    !Validator.isLength(data.phoneNumber, {
      min: 10,
      max: 10
    })
  ) {
    errors.phoneNumber = "Invalid Phone number";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone Number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
