import React from "react";
import "./Login.scss";
import logoOne from "../assets/imgs/logos/cta-logo-one.svg";
import logoTwo from "../assets/imgs/logos/cta-logo-two.png";

const Login = () => {
  return (
    <section className="section-login">
      <div className="login-content">
        <img
          className="logo-one-img login-logo"
          src={logoOne}
          alt="hulu, disney+, espn+, logos"
        />
        <a href="#" className="login-btn">
          GET ALL THERE
        </a>
        <p className="login-plan-info">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img className="logo-two-img login-logo" src={logoTwo} alt="logos" />
      </div>
    </section>
  );
};

export default Login;
