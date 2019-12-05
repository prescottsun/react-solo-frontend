import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import "./App.css";
import TestAPI from "./components/TestAPI";
import EmbeddedWidget from "./components/EmbeddedWidget";
import Navigation from "./components/Navbar";
import CityList from "./components/CityList";
import Wrapper from "./components/Wrapper";
import SearchCity from "./components/SearchCity";
import Signup from "./components/Signup";
import UserInfo from "./components/UserInfo";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

import "bulma/css/bulma.css";
import CityContextProvider from "./contexts/CityContext";
import UserContextProvider from "./contexts/UserContext";
import Title from "./components/Title";
// import FirebaseLogin from "./components/FirebaseLogin";

const App = props => {
  return (
    <div className="App">
      <UserContextProvider>
        <CityContextProvider>
          <Router>
            <Route path="/" component={Navigation} />
            {/* <Route path="/" render={props => <FirebaseLogin {...props} />} /> */}
            <Wrapper>
              {/* <Route path="/" component={SearchCity} /> */}
              <Route exact path="/" component={Title} />
              <Route path="/testAPI" component={TestAPI} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={UserInfo} />
              <Route exact path="/cities" component={CityList} />
              <Route path="/cities/:city" component={EmbeddedWidget} />
            </Wrapper>
          </Router>
        </CityContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
