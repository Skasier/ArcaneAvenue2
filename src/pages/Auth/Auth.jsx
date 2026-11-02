import "./Auth.css";
import { useState } from "react";
import Banner from "../../assets/Home Banner.png";

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState("register");

  return (
    <div className="auth-wrapper ">
      <div className="auth-image-col  ">
        <img src={Banner} />
      </div>

      <div className="auth-content ">
        <div className="auth-switch">
          <button
            className={selectedForm === "login" ? "active" : ""}
            onClick={() => setSelectedForm("login")}
          >
            LOGIN
          </button>

          <button
            className={selectedForm === "register" ? "active" : ""}
            onClick={() => setSelectedForm("register")}
          >
            REGISTER
          </button>
        </div>

        {selectedForm === "register" ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}

function RegisterForm() {
  return (
    <form className="auth-form">
      <div className="form-field">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
      </div>

      <div className="form-field">
        <label>Confirm Password</label>
        <input type="password" placeholder="Enter your password again..." />
      </div>

      <div className="type-toggle">
        <span>Account Type:</span>
        <div className="button-cont">
          <label className="toggle" htmlFor="btoggle">
            <span>Buyer</span>
            <input type="radio" id="btoggle" className="btoggle" name="selector"  defaultChecked/>
          </label>
          <label className="toggle" htmlFor="stoggle">
            <span>Seller</span>
            <input type="radio" id="stoggle" className="stoggle" name="selector" />
          </label>
        </div>
      </div>

      <button className="submit-btn" type="submit">
        REGISTER
      </button>
    </form>
  );
}

function LoginForm() {
  return (
    <form className="auth-form  ">
      <div className="form-field ">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
      </div>

      <button className="submit-btn" type="submit">
        LOGIN
      </button>
    </form>
  );
}
