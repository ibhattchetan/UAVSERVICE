const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = validatePartnerProfileUpdate = data => {
  let errors = {};

  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.jobsCompleted = !isEmpty(data.jobsCompleted) ? data.jobsCompleted : "";
  data.services = !isEmpty(data.services) ? data.services : "";
  data.ratePerHour = !isEmpty(data.ratePerHour) ? data.ratePerHour : "";
  data.currentLocation = !isEmpty(data.currentLocation)
    ? data.currentLocation
    : "";

  // phone number Validation
  if (
    !Validator.isMobilePhone(data.phoneNumber) ||
    !Validator.isLength(data.phoneNumber, {
      min: 10,
      max: 10
    })
  ) {
    console.log("invalid Phone number");
    errors.phoneNumber = "Invalid Phone number";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone Number is required";
  }

  // currentLocation Validation
  if (Validator.isEmpty(data.currentLocation)) {
    errors.currentLocation = "Current Location is required";
  }

  // jobComplited Validation
  if (!Validator.isNumeric(data.jobsCompleted)) {
    errors.jobsCompleted = "Job complited must be number";
  }

  // services Validation

  let servicesInput = data.services.split(",");
  for (let index = 0; index < servicesInput.length; index++) {
    if (
      !Validator.equals(servicesInput[index], "Plumbing") &&
      !Validator.equals(servicesInput[index], "Carpentry") &&
      !Validator.equals(servicesInput[index], "Cleaning") &&
      !Validator.equals(servicesInput[index], "Electrical") &&
      !Validator.equals(servicesInput[index], "Appliances") &&
      !Validator.equals(servicesInput[index], "Painting")
    ) {
      errors.services = "Invalid Service Type";
    }
  }
  if (Validator.isEmpty(data.services)) {
    errors.services = "Services required";
  }

  // rate per hour Validation
  let rateInput = data.ratePerHour.split(",");
  console.log(servicesInput.length, rateInput.length);
  if (servicesInput.length !== rateInput.length) {
    errors.ratePerHour = "Rate per hour length must be same as services";
  }
  if (Validator.isEmpty(data.ratePerHour)) {
    errors.ratePerHour = "Rate per hour required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
