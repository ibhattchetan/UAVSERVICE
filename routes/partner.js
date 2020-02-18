const router = require("express").Router();
const { Partner, User } = require("../database");
const passport = require("passport");
const validatePartnerProfileUpdate = require("../validations/partner");

// @route   POST /api/partner/update-partner
// @desc    Update Partner Profile
// @access  Private
router.post(
  "/update-partner",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    const { errors, isValid } = validatePartnerProfileUpdate(req.body);

    // Check Validations
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const partnerData = new Partner({
      jobsCompleted: req.body.jobsCompleted,
      user_id: req.user.id,
      services: req.body.services,
      ratePerHour: req.body.ratePerHour,
      currentLocation: req.body.currentLocation,
      phoneNumber: req.body.phoneNumber
    });
    Partner.findOne({
      where: {
        user_id: req.user.id
      }
    })
      .then(item => {
        if (!item) {
          partnerData
            .save()
            .then(saved => {
              if (!saved) {
                return res.status(400).json(errors);
              } else {
                res.status(200).json(saved);
              }
            })
            .catch(err => console.log(err));
        } else {
          item.services = req.body.services.split(",");
          item.ratePerHour = req.body.ratePerHour.split(",");
          item.currentLocation = req.body.currentLocation.split(",");
          Partner.update(
            {
              jobsCompleted: req.body.jobsCompleted,
              services: item.services,
              ratePerHour: item.ratePerHour,
              currentLocation: item.currentLocation,
              phoneNumber: req.body.phoneNumber
            },
            { where: { user_id: req.user.id }, returning: true }
          )
            .then(updated => {
              if (!updated) {
                return res.status(400).json(errors);
              } else {
                res.status(200).json(updated);
              }
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }
);

// @route   GET /api/partner
// @desc    Get partner belongsto user
// @access  Public
router.get("/", (req, res) => {
  Partner.belongsTo(User, { foreignKey: "user_id" });
  Partner.findAll({
    include: [
      {
        model: User,
        require: true
      }
    ]
  })
    .then(partner => res.status(200).json(partner))
    .catch(err => console.log(err));
});

module.exports = router;
