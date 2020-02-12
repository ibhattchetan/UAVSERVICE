import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "./redux/store";
import { Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./redux/actions/authActions";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Signin from "./pages/signin/signin.component";
import SignUp from "./pages/signup/signup.component";
import HomeClaning from "./pages/categories/cleaning/Cleaning.component";
import PestControl from "./pages/categories/pest-control/PestControl.component";
import Appliances from "./pages/categories/appliances/Appliances.component";
import Plumbing from "./pages/categories/plumbing/Plumbing.component";
import Electrical from "./pages/categories/electrical/Electrical.component";
import Carpentry from "./pages/categories/carpentry/Carpentry.component";
import Painting from "./pages/categories/painting/Painting.component";
import About from "./pages/company/about/About.component";
import Contact from "./pages/company/contact/Contact.component";
import Privacy from "./pages/company/privacy/Privacy.component";

// check for token
if (localStorage.jwtToken) {
  // set Auth token to header
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info
  const decode = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Signin} />
            <Route exact path="/signin" component={SignUp} />
            <Route exact path="/home-cleaning" component={HomeClaning} />
            <Route exact path="/pest-control" component={PestControl} />
            <Route exact path="/appliances" component={Appliances} />
            <Route exact path="/plumbing" component={Plumbing} />
            <Route exact path="/electrical" component={Electrical} />
            <Route exact path="/carpentry" component={Carpentry} />
            <Route exact path="/painting" component={Painting} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy" component={Privacy} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
