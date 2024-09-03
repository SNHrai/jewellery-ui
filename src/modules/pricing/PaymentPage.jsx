import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadScript } from "../../util/loadScript";
import { getAuthToken } from "../../util/handler";
import { motion } from "framer-motion";
import rozarpayImg from "../../util/images/razorpay-icon.svg";
import { useUser } from "../../context/user";

const PaymentPage = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();
  const amount = location.state?.amount || 1000; // Default amount if none is passed

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const handlePayment = async (paymentMethod) => {
    setLoading(true);
    setError(null);

    try {
      const token = getAuthToken();
      const response = await fetch(
        "http://localhost:8080/api/razorpay/createOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount: amount, currency: "INR" }),
        }
      );

      const orderData = await response.json();

      if (response.ok) {
        if (paymentMethod === "razorpay") {
          openRazorpayCheckout(orderData);
        } else {
          // Handle other payment methods (Google Pay, PhonePe, etc.)
          handleThirdPartyPayment(paymentMethod, orderData);
        }
      } else {
        throw new Error(orderData.message || "Failed to create payment order");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openRazorpayCheckout = (orderData) => {
    const options = {
      key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Jweleality",
      description: "Payment for services",
      order_id: orderData.id,
      handler: function (response) {
        verifyPayment(response);
      },
      prefill: {
        name: user?.firstName + "" + user?.lastName,
        email: user?.email,
        contact: user?.mobileNumber,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleThirdPartyPayment = (paymentMethod, orderData) => {
    // Implement logic for third-party payment methods
    console.log(`Handling ${paymentMethod} payment`, orderData);
  };

  const verifyPayment = async (paymentResponse) => {
  //   console.log("paymentResponse",paymentResponse)
  //   {
  //     "razorpay_payment_id": "pay_OkMOCVg7QdcEfN",
  //     "razorpay_order_id": "order_OkMNvIhjgEKYDt",
  //     "razorpay_signature": "af9021e0e28ad045e36caa966330d8c0e278290eccf5869aba1dcd1e8c872857"
  // }
  // const user_id = user?.id;
  //   window.location.href = "http://localhost:8080/payment-status?order_id=pay_OjJNMGzZeStCQq&user_id=1";
    // try {
    //   const token = getAuthToken();
    //   const response = await fetch(
    //     "http://localhost:8080/api/razorpay/verifyPayment",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(paymentResponse),
    //     }
    //   );

    //   const result = await response.json();

    //   if (response.ok) {
    //     // Payment successful, navigate to success page
    //     navigate("/payment-success");
    //   } else {
    //     throw new Error(result.message || "Payment verification failed");
    //   }
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">
        Choose Payment Method
      </h1>
      {error && (
        <div className="px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}

      <motion.div
        className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
        initial={{ height: "80px" }}
        animate={{ height: isExpanded ? "auto" : "80px" }}
        transition={{ duration: 0.3 }}>
        <div
          className="flex items-center justify-center p-3 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}>
          <img
            src={rozarpayImg}
            alt="Razorpay logo"
            className="h-12 mr-4 w-28"
          />
          <span className="text-xl font-semibold">Pay with Razorpay</span>
        </div>

        {isExpanded && (
          <motion.div
            className="p-4 bg-blue-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}>
            <p className="mb-4 text-gray-600">
              Razorpay offers a secure and convenient way to make online
              payments. With fast processing and multiple payment options, it's
              the smart choice for your transaction.
            </p>
            <button
              onClick={() => handlePayment("razorpay")}
              className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-blue-500 rounded hover:bg-blue-600"
              disabled={loading}>
              Proceed to Payment
            </button>
          </motion.div>
        )}
      </motion.div>

      {loading && (
        <div className="flex items-center justify-center mt-8">
          <div className="w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
          <span className="ml-3 text-lg font-semibold">
            Processing payment...
          </span>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
