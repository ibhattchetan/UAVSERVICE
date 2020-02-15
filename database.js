const Sequelize = require("sequelize");
const UserModel = require("./model/User");
const SubscribeModel = require("./model/Subscribe");
const PartnerProfileModel = require("./model/Partner");
const CustomerProfileModel = require("./model/Customer");
const ReviewModel = require("./model/Review");

const sequelize = new Sequelize("servicium", "dinesh", "dinesh", {
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
    sequelize.sync();
  })
  .catch(err => console.error("Unable To Connect to Database", err));

let User = UserModel(sequelize, Sequelize);
let Subscribe = SubscribeModel(sequelize, Sequelize);
let Partner = PartnerProfileModel(sequelize, Sequelize);
let Customer = CustomerProfileModel(sequelize, Sequelize);
let Review = ReviewModel(sequelize, Sequelize);

module.exports = {
  User,
  Subscribe,
  Partner,
  Customer,
  Review
};
