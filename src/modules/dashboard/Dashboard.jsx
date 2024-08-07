import React, { useState, useRef, useEffect } from "react";
import "./Dashboard.css";
import ProfileDropdown from "../profile/ProfileDropdown";
import { Link, useNavigate } from "react-router-dom";
import History from "../history/History";
import axios from "axios";
import { saveAs } from "file-saver";
import download from "downloadjs";
import { motion, AnimatePresence } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { FaHome, FaUser } from "react-icons/fa";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [isCreateWithText, setIsCreateWithText] = useState(true);
  const [isCreateWithImage, setIsCreateWithImage] = useState(false);
  const [isCreateWithTextAndImage, setIsCreateWithTextAndImage] =
    useState(false);
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  // New states for dropdowns
  const [designType, setDesignType] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [showDesignTypeDropdown, setShowDesignTypeDropdown] = useState(true);
  const [showImageNumberDropdown, setShowImageNumberDropdown] = useState(false);
  const [downloadedImages, setDownloadedImages] = useState([]);
  const [enhancedText, setEnhancedText] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhancingLoading, setEnhancingLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateWithText = () => {
    setShowDesignTypeDropdown(true);
    setIsCreateWithText(true);
    setIsCreateWithImage(false);
    setIsCreateWithTextAndImage(false);
  };

  const handleCreateWithImage = () => {
    setIsCreateWithText(false);
    setIsCreateWithImage(true);
    setIsCreateWithTextAndImage(false);
    setShowDesignTypeDropdown(false);
    setShowImageNumberDropdown(false);
  };

  const handleCreateWithTextAndImage = () => {
    setIsCreateWithText(false);
    setIsCreateWithImage(false);
    setIsCreateWithTextAndImage(true);
    setShowDesignTypeDropdown(false);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleDesignTypeChange = (e) => {
    setDesignType(e.target.value);
    // setShowDesignTypeDropdown(false);
    setShowImageNumberDropdown(true);
  };

  const handleImageNumberChange = (e) => {
    setNumImages(Number(e.target.value));
  };

  // const handleDrag = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (e.type === "dragenter" || e.type === "dragover") {
  //     setDragActive(true);
  //   } else if (e.type === "dragleave") {
  //     setDragActive(false);
  //   }
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     setImage(URL.createObjectURL(e.dataTransfer.files[0]));
  //   }
  // };

  // const handleFileInput = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setImage(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  const handleGenerateImageWithText = async () => {
    if (!textValue || !designType || !numImages) return;

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://7ff7-54-172-116-120.ngrok-free.app",
        {
          prompt: textValue,
          style: designType,
          number: numImages,
        }
      );

      setGeneratedImages(response.data.image_urls);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnhanceText = async () => {
    if (!textValue) return;

    setIsEnhancing(true);
    setEnhancingLoading(true);

    try {
      const response = await axios.post(
        "https://cb15-54-172-116-120.ngrok-free.app",
        { text: textValue }
      );

      const enhancedPrompt = response.data.enhanced_prompt;
      setEnhancedText(enhancedPrompt.replace(/"/g, "")); // Remove extra quotes
      setTextValue(enhancedPrompt.replace(/"/g, "")); // Update textarea with enhanced text
    } catch (error) {
      console.error("Error enhancing text:", error);
    } finally {
      setIsEnhancing(false);
      setEnhancingLoading(false);
    }
  };
  // const handleGenerateImageWithImage = async() => {
  //   if (!textValue) return;

  //   setIsEnhancing(true);
  //   setEnhancingLoading(true);

  //   try {
  //     const response = await axios.post(
  //       "https://cb15-54-172-116-120.ngrok-free.app",
  //       { text: textValue }
  //     );

  //     const enhancedPrompt = response.data.enhanced_prompt;
  //     setEnhancedText(enhancedPrompt.replace(/"/g, "")); // Remove extra quotes
  //     setTextValue(enhancedPrompt.replace(/"/g, "")); // Update textarea with enhanced text
  //   } catch (error) {
  //     console.error("Error enhancing text:", error);
  //   } finally {
  //     setIsEnhancing(false);
  //     setEnhancingLoading(false);
  //   }
  // };

  const handleGenerateImageWithTextAndImage = () => {
    setIsLoading(true);

    setTimeout(() => {
      const dummyImages = [
        "https://via.placeholder.com/300x200?text=Image+1",
        "https://via.placeholder.com/300x200?text=Image+2",
        "https://via.placeholder.com/300x200?text=Image+3",
        "https://via.placeholder.com/300x200?text=Image+4",
      ];
      setGeneratedImages(dummyImages);
      setIsLoading(false);
    }, Math.random() * 2000 + 4000);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const onClickHandler = () => {
    navigate("/pricing");
  };

  const handleDownload = (imageUrl) => {
    console.log("imageUrl", imageUrl);
    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const fileName = `image-${Date.now()}.png`;
        download(blob, fileName, "image/png");
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  useEffect(() => {
    console.log(generatedImages);
  });

  const closeModal = () => {
    setSelectedImage(null);
  };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     handleFileInput(e.dataTransfer.files[0]);
  //   }
  // };

  // const handleFileChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     handleFileInput(e.target.files[0]);
  //   }
  // };

  // const callApiForText = async (imageData) => {
  //   try {
  //     const response = await fetch('https://3600-54-172-116-120.ngrok-free.app', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ image: imageData }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setGeneratedText(data.description);
  //     } else {
  //       console.error('Failed to fetch text from the image');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching text from the image:', error);
  //   }
  // };

  // const handleFileInput = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //     callApiForText(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileInput(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://3600-54-172-116-120.ngrok-free.app",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const text = response.data.description;
      setGeneratedText(text);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleCopy = () => {
    toast.success("Text copied to clipboard!");
  };

  return (
    <div className="min-h-screen p-8 bg-[#fdfefd]">
      <div className="">
        <div className="bg-[#f0ebea] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between h-auto md:h-24">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="text-[#9d5e7b] font-semibold form-labels text-sm md:text-base">
              REMAINING FREE CREATIVE CREDITS: 1
            </span>

            <button
              className="custom-btn px-4 py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
              onClick={() => onClickHandler()}>
              Subscribe Now
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="relative text-[#9d5e7b] transition-colors duration-300 hover:text-[#b59481] group">
                <FaUser className="w-8 h-8"/>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg> */}
              <span className="absolute bottom-0 px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 translate-y-full bg-gray-800 rounded-md opacity-0 left-1/2 group-hover:opacity-100">
                Profile
              </span>
            </Link>
            <Link
              to="/home"
              className="relative text-[#9d5e7b] d-felx justify-center align-items-center  transition-colors duration-300 hover:text-[#b59481] group ">
                <FaHome className="w-10 h-10"/>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l9-9m0 0l9 9m-9-9v18"
                />
              </svg> */}
              <span className="absolute bottom-0 px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 translate-y-full bg-gray-800 rounded-md opacity-0 left-1/2 group-hover:opacity-100">
                Home
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mt-8">
          <div className="flex-1 min-w-[300px]">
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={handleCreateWithText}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithText
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                Create with Text
              </button>
              <button
                onClick={handleCreateWithImage}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithImage
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                Create with Image
              </button>
              <button
                onClick={handleCreateWithTextAndImage}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithTextAndImage
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                Image with text
              </button>
            </div>

            <div className="transition-all duration-500">
              <div
                className={`${
                  showDesignTypeDropdown
                    ? "opacity-100"
                    : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {isCreateWithText && showDesignTypeDropdown && (
                  <div className="mt-8">
                    <h2 className="text-2xl cursor-pointer button-fonts  font-bold text-[#9d5e7b] custom-btn">
                      Select your design type to begin your designing journey
                    </h2>
                    <div className="mt-4">
                      <select
                        className="w-full cursor-pointer button-fonts  p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
                        value={designType}
                        onChange={handleDesignTypeChange}>
                        <option value="">Select Design Type</option>
                        {/* <option value="cinematic">Cinematic</option> */}
                        <option value="photographic">Photographic</option>
                        <option value="3d-models">3D Models</option>
                        <option value="no-styles">No Styles</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="transition-all duration-500">
              <div
                className={`${
                  showImageNumberDropdown
                    ? "opacity-100"
                    : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {showImageNumberDropdown && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                      Select the number of images you want to generate
                    </h2>
                    <div className="mt-4">
                      <select
                        className="w-full cursor-pointer p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
                        value={numImages}
                        onChange={handleImageNumberChange}>
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="transition-all duration-500">
              <div
                className={`${
                  isCreateWithText ? "opacity-100" : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {isCreateWithText && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                      Create with Text
                    </h2>
                    <p className="mb-4 text-[#9d5e7b] custom-btn">
                      Select a template and add your text.
                    </p>
                    <div className="relative">
                      <textarea
                        className={`w-full p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
                          enhancingLoading
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        rows="4"
                        placeholder="Enter your text here..."
                        value={textValue}
                        onChange={handleTextChange}
                        disabled={enhancingLoading}></textarea>
                      <button
                        className={`absolute bottom-4 right-4 flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] transition-all duration-300 ${
                          textValue
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        } group`}
                        onClick={handleEnhanceText}
                        disabled={enhancingLoading}>
                        <span className="mr-2 animate-wiggle form-labels">
                          🧙‍♂️ Enhance your text
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="container p-4 mx-auto">
                {isCreateWithImage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8">
                    <p className="mb-4 text-[#9d5e7b] custom-btn">
                      Select an image to get started.
                    </p>
                    <div
                      className={`relative w-full p-4 border-2 border-dashed rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
                        dragActive ? "border-[#9d5e7b]" : "border-[#f0ebea]"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => inputRef.current.click()}>
                      <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileInput(e.target.files[0])}
                      />
                      <div
                        className={`flex flex-col items-center justify-center ${
                          dragActive ? "opacity-50" : "opacity-100"
                        }`}>
                        <p className="text-[#9d5e7b] custom-btn">
                          Drag & drop an image here, or click to select one
                        </p>
                        <p className="text-xs text-[#9d5e7b] custom-btn">
                          (PNG, JPG, GIF up to 10MB)
                        </p>
                      </div>
                    </div>

                    {isPopupOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 custom-generated-div">
                        <div className="p-6 bg-white rounded-lg shadow-lg h-96 w-96 custom-generated-div custom-card-div">
                          <h3 className="mb-4 text-xl font-semibold ">
                            Generated Text
                          </h3>
                          <textarea
                            readOnly
                            value={generatedText}
                            className="w-full p-2 mb-4 border h-56 border-[#9d5e7b] rounded-lg"
                          />
                          <CopyToClipboard
                            text={generatedText}
                            onCopy={handleCopy}>
                            <button className="px-4 py-2 text-white bg-gradient-to-r from-[#9d5e7b] to-[#b59481] rounded-lg hover:bg-gradient-to-l">
                              Copy
                            </button>
                          </CopyToClipboard>
                          <button
                            onClick={() => setIsPopupOpen(false)}
                            className="px-4 py-2 ml-2 text-black bg-gray-300 rounded-lg hover:bg-gray-400">
                            Close
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>

              <div
                className={`${
                  isCreateWithTextAndImage
                    ? "opacity-100"
                    : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {isCreateWithTextAndImage && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                      Create with Text and Image
                    </h2>
                    <p className="mb-4 mt-8 text-[#9d5e7b] custom-btn">
                      Select an image to get started.
                    </p>
                    <div
                      className={`relative w-full mb-3 p-4 border-2 border-dashed rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
                        dragActive ? "border-[#9d5e7b]" : "border-[#f0ebea]"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={""}>
                      <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileInput}
                      />
                      <div
                        className={`flex flex-col items-center justify-center ${
                          dragActive ? "opacity-50" : "opacity-100"
                        }`}>
                        {image ? (
                          <img
                            src={image}
                            alt="Selected"
                            className="max-w-full max-h-64"
                          />
                        ) : (
                          <>
                            <p className="text-[#9d5e7b] custom-btn">
                              Drag & drop an image here, or click to select one
                            </p>
                            <p className="text-xs text-[#9d5e7b] custom-btn">
                              (PNG, JPG, GIF up to 10MB)
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="mb-4 text-[#9d5e7b] custom-btn">
                      Your text will Appear here.
                    </p>
                    <div className="relative">
                      <textarea
                        className="w-full p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
                        rows="4"
                        placeholder=""
                        value={textValue}
                        onChange={handleTextChange}></textarea>
                      <button
                        className={`absolute right-4 flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] transition-all duration-300 ${
                          textValue
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        } group`}>
                        <span className="mr-2 animate-wiggle form-labels">
                          🧙‍♂️ Enhance your text
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {isCreateWithText && (
              <button
                onClick={handleGenerateImageWithText}
                className="w-full form-labels mt-4 px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )}
            {/* {isCreateWithImage && (
              <button
                onClick={handleGenerateImageWithImage}
                className="w-full mt-4 form-labels px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )} */}
            {isCreateWithTextAndImage && (
              <button
                onClick={handleGenerateImageWithTextAndImage}
                className="w-full mt-4 form-labels px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )}
          </div>

          <div className="flex-1 min-w-[300px]">
            <div className="bg-[#f0ebea] rounded-lg p-4">
              <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                Your desired designs are waiting for you
              </h2>
              {generatedImages.length >= 1 ? (
                <p className="mb-4 text-[#9d5e7b] custom-btn">
                  Here’s the image you’ve generated.
                </p>
              ) : (
                <p className="mb-4 text-[#9d5e7b] custom-btn">
                  Generate an image to see your design come to life.
                </p>
              )}
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="loader button-fonts">
                    Generating your image please wait...
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {generatedImages.length === 1 ? (
                    <div className="w-full single-image-container">
                      <img
                        src={generatedImages[0]}
                        alt="Generated 1"
                        className="relative justify-center m-auto ml-8 rounded-lg d-flex align-items-center "
                        onClick={() => handleImageSelect(generatedImages[0])}
                      />
                      <button
                        onClick={() => handleDownload(generatedImages[0])}
                        className="download-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#9d5e7b]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    generatedImages.map((image, index) => (
                      <div key={index} className="relative image-container">
                        <img
                          src={image}
                          alt={`Generated ${index + 1}`}
                          className={`cursor-pointer rounded-lg`}
                          onClick={() => handleImageSelect(image)}
                        />
                        <button
                          onClick={() => handleDownload(generatedImages[0])}
                          className="download-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[#9d5e7b]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {selectedImage && (
              <div className="modal-overlay active">
                <div className="modal-content">
                  <button className="close-modal" onClick={closeModal}>
                    X
                  </button>
                  <img src={selectedImage} alt="Selected" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t-blue-800">
        <History />
      </div>
    </div>
  );
};

export default UserDashboard;
