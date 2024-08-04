import React, { useState } from "react";
import "./pricing.css";

function Pricing() {
  return (
    <div className="dashboard-container">
      <div className="diagonal-bg">
        <div className="package-header">
          <h2 className="w-50">Monthly Package</h2>
          <h2 className="w-50 annual-package">Annual Package</h2>
        </div>
      </div>
      <div className="content col-lg-12">
        <div className="card col-md-4">
          <div className="price-monthly">
            <h2>Basic version</h2>
            <h5>200 Creations</h5>
            <h1>$12.00/month</h1>
          </div>
          <b>
          <p>Create 200 times for free</p>
          <p>4 images per creation</p>
          <p>Resolution: 1024*1024</p>
          <p>Get 800 stunning design images</p>
          </b>
        </div>
        <div className="card col-md-4">
          <div className="price-monthly">
            <h2>Advanced version</h2>
            <h5>600 Creations</h5>
            <h1>$30.00/month</h1>
          </div>
          <b>
          <p>Create 600 times for free</p>
          <p>4 images per creation</p>
          <p>Resolution: 1024*1024</p>
          <p>Get 2400 stunning design images</p>
          </b>
        </div>
        <div className="card col-md-4">
          <div className="price-monthly">
            <h2>Business version</h2>
            <h5>1500 Creations</h5>
            <h1>$60.00/month</h1>
          </div>
          <b>
          <p>Create 1500 times for free</p>
          <p>4 images per creation</p>
          <p>Resolution: 1024*1024</p>
          <p>Get 6000 stunning design images</p>
          </b>
        </div>
      </div>
      <div className="terms-container">
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">
          I agree to the
          <span className="highlight">《JewelryHunt AI Creation Service Terms》</span>
          including the
          <span className="highlight">《User Service Agreement》</span>
          and
          <span className="highlight">《Privacy Policy》</span>
        </label>
      </div>
    </div>
  );
}

export default Pricing;
