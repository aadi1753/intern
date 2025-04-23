import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/login", loginData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
      })
      .catch(() => {
        setError("Invalid login credentials");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={loginData.email} onChange={handleLoginChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={loginData.password} onChange={handleLoginChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

function Signup() {
  const [signupData, setSignupData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/signup", signupData)
      .then(() => {
        alert("Signup successful!");
      })
      .catch(() => {
        setError("Signup failed");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center">Signup</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={signupData.email} onChange={handleSignupChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={signupData.password} onChange={handleSignupChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Signup</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;