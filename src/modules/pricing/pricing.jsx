import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaArrowLeft, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../../util/handler";

const PricingContainer = styled.div`
  min-height: 100vh;
  background-color: #f0ebea;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ToggleButton = styled.button`
  background-color: #9d5e7b;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b59481;
  }
`;

const Title = styled.h2`
  font-size: 2.25rem; /* 3xl */
  font-weight: bold;
  color: #9d5e7b;
  margin-bottom: 32px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
`;

const Card = styled(motion.div)`
  background-color: #fdfefd;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #ebdfd8;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  width: 300px;
  text-align: center;

  &:hover {
    background-color: #ebdfd8;
    border-color: #9d5e7b;
  }
`;

const Price = styled.h1`
  font-size: 2.25rem; /* 4xl */
  font-weight: bold;
  color: #9d5e7b;
`;

const PaymentIcon = styled.div`
  margin-top: 16px;
  font-size: 1.5rem; /* text-xl */
  color: #9d5e7b;
  cursor: pointer;
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  text-align: center;
`;

const TermsLabel = styled.label`
  color: #9d5e7b;
  font-size: 0.875rem; /* text-sm */
  cursor: pointer;

  .highlight {
    color: #b59481;
    margin: 0 4px;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #9d5e7b;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #b59481;
  }
`;

function Pricing() {
  const navigate = useNavigate();
  const [showMonthly, setShowMonthly] = useState(true);

  const navigateToPayment = (amount) => {
    navigate("/payment-page", { state: { amount } });
  };

  const handleToggle = () => {
    setShowMonthly(!showMonthly);
  };

  const onClickHandler = () => {
    navigate("/dashboard");
  };

  return (
    <PricingContainer>
      <BackButton onClick={onClickHandler}>
        <FaArrowLeft />
      </BackButton>
      <Header>
        <ToggleButton onClick={handleToggle}>
          {showMonthly ? "Show Annual Packages" : "Show Monthly Packages"}
        </ToggleButton>
      </Header>
      <Title>{showMonthly ? "Monthly Packages" : "Annual Packages"}</Title>
      <CardContainer>
        {showMonthly ? (
          <>
            <Card
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigateToPayment(1)}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Basic version
                </h2>
                <h5 className="text-lg text-[#9d5e7b] ">200 Creations</h5>
                <Price>$0.00/month</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 200 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 800 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
            <Card
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigateToPayment(1)}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Advance version
                </h2>
                <h5 className="text-lg text-[#9d5e7b]">600 Creations</h5>
                <Price>$0.00/month</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 600 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 800 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
            <Card
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigateToPayment(1)}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Business version
                </h2>
                <h5 className="text-lg text-[#9d5e7b]">1500 Creations</h5>
                <Price>$0.00/month</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 1500 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 800 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
          </>
        ) : (
          <>
            <Card
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigateToPayment(10)}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Basic version
                </h2>
                <h5 className="text-lg text-[#9d5e7b]">480 Creations</h5>
                <Price>$0.00/year</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 480 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 9600 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
            <Card whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Advance version
                </h2>
                <h5 className="text-lg text-[#9d5e7b]">640 Creations</h5>
                <Price>$0.00/year</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 640 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 9600 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
            <Card
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigateToPayment(1)}>
              <div className="flex-col gap-3 d-flex">
                <h2 className="text-2xl font-bold text-[#9d5e7b]">
                  Business version
                </h2>
                <h5 className="text-lg text-[#9d5e7b]">2400 Creations</h5>
                <Price>$0.00/year</Price>
                <b className="text-[#9d5e7b]">
                  <p>Create 2400 times for free</p>
                  <p>4 images per creation</p>
                  <p>Resolution: 1024*1024</p>
                  <p>Get 9600 stunning design images</p>
                </b>
                <PaymentIcon onClick={navigateToPayment}>
                  <FaLink />
                </PaymentIcon>
              </div>
            </Card>
          </>
        )}
      </CardContainer>
      <TermsContainer>
        <input type="checkbox" id="terms" name="terms" className="mr-2" />
        <TermsLabel htmlFor="terms">
          I agree to the
          <span className="highlight">
            《AI Creation Service Terms》
          </span>
          including the
          <span className="highlight">《User Service Agreement》</span>
          and
          <span className="highlight">《Privacy Policy》</span>
        </TermsLabel>
      </TermsContainer>
    </PricingContainer>
  );
}

export default Pricing;
