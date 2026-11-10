import "./Auth.css";
import { useState } from "react";
import Banner from "../../assets/Home Banner.png";

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

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    alert("form submitted");
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
  function handleSubmit(event) {
    event.preventDefault();
    alert("form submitted");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-field ">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." required />
      </div>

      <div className="form-field">
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." required />
      </div>

      <button className="submit-btn" type="submit">
        LOGIN
      </button>
    </form>
  );
}
