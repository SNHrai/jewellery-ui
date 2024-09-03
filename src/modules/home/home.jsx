import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Crousel from "./crousel";
import "./home.css";
import GroupIcon from "../../util/images/multiple-users-silhouette.png";
import Clock from "../../util/images/clock.svg";
import Code from "../../util/images/code.svg";
import Eye from "../../util/images/eye.svg";
import SpeedoMeter from "../../util/images/speedometer.svg";
import ThumbsUpIcon from "../../util/images/thumbs-up.svg";
import RevolutionDesign from "../../util/images/revolution-design.png";
import WorldClassDesign from "../../util/images/world-class-jewel.png";
import Infinity from "../../util/images/infinity.png";
import Easy from "../../util/images/easy.png";
import LeadInnovation from "../../util/images/lead-innovation.png";
import Carousel from "./CarouselComponent";
import OurReview from "./Review";
import GifSection from "./GifSection";
import Contact from "./contact";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: RevolutionDesign,
    title: "Jewelry Design Revolutionized",
    description:
      "At AI-CREATION, we use advanced AI technology to transform your ideas into detailed and beautiful jewelry designs in seconds.",
  },
  {
    icon: Easy,
    title: "Easy to Use",
    description:
      "Our intuitive interface allows anyone to create stunning jewelry designs without any technical skills.",
  },
  {
    icon: WorldClassDesign,
    title: "World-Class Designs",
    description:
      "AI-CREATION supports and enhances your design journey, providing resources and inspiration to bring your best ideas to life.",
  },
  {
    icon: Infinity,
    title: "Endless Possibilities",
    description:
      "Experiment with various styles, materials, and settings to create both classic and modern pieces. The possibilities are limitless.",
  },
  {
    icon: SpeedoMeter,
    title: "Accessible Anytime, Anywhere",
    description:
      "Design whenever inspiration strikes. Our cloud-based platform lets you access powerful AI tools from anywhere in the world.",
  },
  {
    icon: LeadInnovation,
    title: "Lead in Innovation",
    description:
      "Stay ahead with our continuously updated tools, bringing you the latest in AI and design for creating amazing jewelry pieces.",
  },
  {
    icon: Code,
    title: "Instant Creativity",
    description:
      "Bring your creative ideas to life instantly. Our AI tools work quickly, visualizing your designs in seconds.",
  },
  {
    icon: Clock,
    title: "Time-Saving Solutions",
    description:
      "Our efficient design process eliminates tedious manual work, allowing you to focus on refining concepts and expanding your collection.",
  },
  {
    icon: GroupIcon,
    title: "Your Creative Partner",
    description:
      "We’re more than just a tool; we support and enhance your design journey with resources and inspiration to bring your ideas to life.",
  },
];

function Home() {
  const [showReview, setShowReview] = useState(false);
  const navigate = useNavigate();

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  const FeatureItem = ({ icon, title, description }) => {
    return (
      <motion.div
        className="p-8 transition-shadow duration-500 ease-out transform rounded-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 bg-gradient-to-r from-[#f7cac9] via-[#fdebd3] to-[#fff5e1]"
        whileHover={{ scale: 1.05, y: -10 }}>
        <div className="flex items-center justify-center mb-6">
          <img className="w-16 h-16 text-primary" src={icon} alt={title} />
        </div>
        <h5 className="mb-4 text-xl font-semibold text-gray-800">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    );
  };

  return (
    <div>
      <Navbar />
      <Crousel />
      <Carousel />
      <GifSection />

      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <div
            className="section-head col-sm-12"
            style={{ marginTop: "100px" }}>
            <h4>
              <span>Why</span> Choose Us
            </h4>
          </div>
          {/* <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-800 section-head">
              Why <span className="text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Choose Us</span>?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-lg text-gray-600">
              Discover the unique advantages of using AI-CREATION for your jewelry design needs.
            </p>
          </div> */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <OurReview />
      {/* <div className="flex items-center justify-center mt-8">
        <button
          className="px-6 py-3 text-white transition-colors rounded-md subscribe-button bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-secondary"
          onClick={toggleReview}>
          {showReview ? "Close" : "Add Review"}
        </button>
      </div> */}
 
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
