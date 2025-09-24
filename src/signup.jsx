import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./signup.css";

function signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    voterId: "",
    password: "",
    role: "citizen",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value) return "Full name is required";
        if (value.length < 3) return "Name must be at least 3 characters";
        break;
      case "email":
        if (!value) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
        break;
      case "voterId":
        if (!value) return "Voter ID is required";
        if (!/^[A-Z0-9]{6,12}$/.test(value))
          return "Enter a valid Voter ID (6–12 characters)";
        break;
      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Sign up successful!");
    }
  };

  return (
    <AuthLayout>
      
      <p className="subtitle"><strong>SignUp</strong></p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Voter ID</label>
          <input
            type="text"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your Voter ID"
          />
          {errors.voterId && <p className="error">{errors.voterId}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter a strong password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
            <option value="officer">Officer</option>
          </select>
        </div>

        <button type="submit" className="auth-btn">
          Sign Up
        </button>
      </form>

      <p className="auth-text">
        Already have an account?{" "}
        <Link to="/" className="auth-link">Log in</Link>
      </p>
    </AuthLayout>
  );
}

export default signup;
