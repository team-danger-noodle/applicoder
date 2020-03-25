import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
import {
  LinkedInLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import axios from "axios";
import "./assets/styles/normalize.css";
import "./assets/styles/styles.scss";

const Login = ({ verify }) => {
  const linkedIn = () => {
    axios("/auth/linkedIn").then((data) => {
      //react router redirect
      window.location = data.data.redirect;
    });
    // fetch("/auth/linkedIn")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     //react router redirect
    //     window.location = data.redirect;
    //   })
  };
  const github = () => {
    axios("/auth/github").then((data) => {
      window.location = data.data;
    });
    // fetch("/auth/github", {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data.redirect)
    //     window.location = data.redirect;
    //   });
  };

  return (
    <div id="landingPage" className="bg-dark">
      <Jumbotron id="OAuth">
        <Image
          src="https://image.flaticon.com/icons/svg/52/52903.svg"
          id="loginIcon"
        ></Image>
        <p id="OAuthIntro">Welcome to...</p>
        <h1>AppliCoder</h1>
        <p>
          An intuitive job-search consolidation tool, which provides the ability
          to maximize queries across various job posting sites in an effort to
          ensure users are aware of the most up-to-date and relevant postings to
          help them capture their dream job in the software development
          industry.
        </p>
        <div id="loginButtons">
          <div className="login">
            <GithubLoginButton
              onClick={github}
              preventActiveStyles={true}
              style={{ width: "99.5%", height: "40px", fontSize: "17px" }}
            />
          </div>
          <div className="login">
            <LinkedInLoginButton
              onClick={linkedIn}
              preventActiveStyles={true}
              style={{ width: "99.5%", height: "40px", fontSize: "17px" }}
            />
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Login;
