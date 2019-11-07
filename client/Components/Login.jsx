import React, { useState } from 'react';

const Login = () => {
  const linkedIn = () => {
    fetch("/auth/linkedIn")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //react router redirect
        window.location = data.redirect;
      })
  }
  const github = () => {
    // console.log('hi')
    fetch("/auth/github", {
      method: 'GET',
      // mode: 'no-cors',
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.redirect)
        window.location = data.redirect;
      });
  }

  return (<div>
    <button className="button linkedin" onClick={linkedIn}>linkedIn</button>
    <button className="button github" onClick={github}>Github</button></div>)
}


export default Login;
