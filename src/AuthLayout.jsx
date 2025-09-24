// src/AuthLayout.jsx
import React from "react";
import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      {/* Left Image Section */}
      <div className="auth-image">
        <img
          src="/auth-image.jpg"   // ✅ path to image inside public folder
          alt="Theme"
        />
      </div>

      {/* Right Form Section */}
      <div className="auth-form">
        <div className="auth-box">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
