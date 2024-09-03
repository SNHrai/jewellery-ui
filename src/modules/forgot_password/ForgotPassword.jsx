import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./transitions.css"; // Add your CSS transitions here
import "./ForgotPassword.css"; // Add your custom styles here

const ForgotPassword = () => {
  const [channel, setChannel] = useState("email");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleChannel = () => {
    setChannel(channel === "email" ? "phone" : "email");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      // Handle success (e.g., show a success message, navigate to another page, etc.)
    }, 2000);
  };

  return (
    <Container className="min-h-screen flex items-center justify-center bg-[#fdfefd] relative">
      <Button
        variant="link"
        onClick={handleBackClick}
        className="absolute top-4 left-4 p-0 text-[#9d5e7b] hover:text-[#9d5e7b]">
        <FaArrowLeft size={24} />
      </Button>
      <div className="w-full max-w-lg p-6 rounded-lg bg-[#fdfefd]">
        <h2 className="text-2xl font-semibold mb-6 text-[#9d5e7b]">
          <span className="font-bold button-fonts">Forgot your password? </span>
        </h2>
        <p className="mb-4 text-[#9d5e7b] form-labels">
          Select the channel you want to get your password on:
        </p>
        <div className="flex justify-center mb-4">
          <Button
            style={{
              backgroundColor: channel === "email" ? "#9d5e7b" : "transparent",
              color: channel === "email" ? "#ffffff" : "#9d5e7b",
              borderColor: "#9d5e7b",
            }}
            onClick={toggleChannel}
            className="mr-2 transition-all duration-300 custom-btn">
            Email
          </Button>
          <Button
            style={{
              backgroundColor: channel === "phone" ? "#9d5e7b" : "transparent",
              color: channel === "phone" ? "#ffffff" : "#9d5e7b",
              borderColor: "#9d5e7b",
            }}
            onClick={toggleChannel}
            className="transition-all duration-300 custom-btn">
            Phone
          </Button>
        </div>

        <CSSTransition
          in={channel === "email"}
          timeout={300}
          classNames="fade"
          unmountOnExit>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="text-[#9d5e7b] border-[#9d5e7b] focus:border-[#9d5e7b] focus:ring-[#9d5e7b]"
            />
          </Form.Group>
        </CSSTransition>
        <CSSTransition
          in={channel === "phone"}
          timeout={300}
          classNames="fade"
          unmountOnExit>
          <Form.Group controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              className="text-[#9d5e7b] border-[#9d5e7b] focus:border-[#9d5e7b] focus:ring-[#9d5e7b]"
            />
          </Form.Group>
        </CSSTransition>
        <Button
          variant="primary"
          type="submit"
          className="mt-4 custom-btn w-full bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] flex items-center justify-center"
          onClick={handleSubmit}
          disabled={loading}>
          {loading ? <div className="">Sending...</div> : "Send Password"}
        </Button>
      </div>
    </Container>
  );
};

export default ForgotPassword;
