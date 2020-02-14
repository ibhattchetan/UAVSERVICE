const router = require("express").Router();
const { Customer, User } = require("../database");
const passport = require("passport");

// @route   POST /api/customer/update-customer
// @desc    Update Customer Profile
// @access  Private
router.post(
  "/update-customer",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const customerData = new Customer({
      currentCity: req.body.currentCity,
      user_id: req.user.id,
      servicePrefrence: req.body.servicePrefrence,
      fullAddress: req.body.fullAddress,
      phoneNumber: req.body.phoneNumber
    });
    Customer.findOne({
      where: {
        user_id: req.user.id
      }
    })
      .then(item => {
        if (!item) {
          customerData
            .save()
            .then(saved => res.status(200).json(saved))
            .catch(err => console.log(err));
        } else {
          item.servicePrefrence = req.body.servicePrefrence.split(",");
          Customer.update(
            {
              currentCity: req.body.currentCity,
              servicePrefrence: item.servicePrefrence,
              fullAddress: item.fullAddress,
              phoneNumber: req.body.phoneNumber
            },
            { where: { user_id: req.user.id }, returning: true }
          )

            .then(updated => res.status(200).json(updated))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }
);

// @route   GET /api/customer
// @desc    Get Customer belongsto user
// @access  Public
router.get("/", (req, res) => {
  Customer.belongsTo(User, { foreignKey: "user_id" });
  Customer.findAll({
    include: [
      {
        model: User,
        require: true
      }
    ]
  })
    .then(customer => res.status(200).json(customer))
    .catch(err => console.log(err));
});

module.exports = router;
