import "./Auth.css";
import { useState } from "react";
import Banner from "../../assets/Home Banner.png";

import axios from "axios";

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState("register");

  return (
    <div className="auth-wrapper ">
      <div className="auth-image-col  ">
        <img src={Banner} alt="" />
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg("");

    function handleRegisterResponse(response) {
      console.log(response);
    }
    function handleRegisterError(error) {
      setErrorMsg(error?.response?.data?.detail || "Unknown Error");
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    const endpoint_url = "http://localhost:8001/auth/register";
    const dataToSend = {
      email: email,
      password: password,
      account_type: "buyer"
    }

    axios.post(endpoint_url, dataToSend)
      .then(handleRegisterResponse)
      .catch(handleRegisterError);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Enter your password again..."
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
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
      {errorMsg && <p className="form-error" role="alert">{errorMsg}</p>}
    </form>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg("");

    axios.post("http://localhost:8001/auth/login", { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrorMsg(error?.response?.data?.detail || "Unknown Error");
      });
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-field ">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <button className="submit-btn" type="submit">
        LOGIN
      </button>
      {errorMsg && <p className="form-error" role="alert">{errorMsg}</p>}
    </form>
  );
}
