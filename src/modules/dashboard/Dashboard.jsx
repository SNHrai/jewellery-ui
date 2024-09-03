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
import { saveUserActivity } from "../../app/activity/userActivitySlice";
import { useDispatch } from "react-redux";
import { useUser } from "../../context/user";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useUser();
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
  const [showStrength, setShowStrength] = useState(false);
  const [handleImages, setHandleImages] = useState();
  const [strengthImages, setStrengthImages] = useState();
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);

  const handleCreateWithText = () => {
    setShowDesignTypeDropdown(true);
    setIsCreateWithText(true);
    setIsCreateWithImage(false);
    setIsCreateWithTextAndImage(false);
    setShowStrength(false);
  };

  const handleCreateWithImage = () => {
    setIsCreateWithText(false);
    setIsCreateWithImage(true);
    setIsCreateWithTextAndImage(false);
    setShowDesignTypeDropdown(false);
    setShowImageNumberDropdown(false);
    setShowStrength(false);
  };

  console.log("user {} : ", user);

  const handleCreateWithTextAndImage = () => {
    setIsCreateWithText(false);
    setIsCreateWithImage(false);
    setIsCreateWithTextAndImage(true);
    setShowDesignTypeDropdown(false);
    setShowImageNumberDropdown(true);
    setShowStrength(true);
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
  const handleImageStrengthChange = (e) => {
    setStrengthImages(Number(e.target.value));
  };

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

      // Convert image URLs to base64 with error handling
      const base64Images = await Promise.all(
        response.data.image_urls.map(async (url) => {
          try {
            const imageResponse = await fetch(url);
            if (!imageResponse.ok) throw new Error("Failed to fetch image");
            const blob = await imageResponse.blob();
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          } catch (error) {
            console.error("Error converting image to base64:", error);
            return null; // Handle this in the UI as needed
          }
        })
      );

      // Filter out any failed conversions
      const validBase64Images = base64Images.filter(Boolean);

      // Ensure there are valid images before dispatching
      if (validBase64Images.length > 0) {
        // Dispatch the saveUserActivity action with converted images
        dispatch(
          saveUserActivity({
            userId: user.id, // Replace with actual user ID
            imageUrls: validBase64Images,
            promptDescription: textValue,
          })
        );

        setGeneratedImages(validBase64Images);
      } else {
        console.error("No valid images to save or display.");
      }
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

  const handleFileInputForImage = (file) => {
    console.log("file from handleFileInputForImage", file);
    if (file) {
      setHandleImages(file); // Set the selected image to handleImages
    }
  };

  const handleGenerateImageWithTextAndImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", handleImages);
    formData.append("prompt", textValue);
    formData.append("strength", strengthImages);
    formData.append("number", numImages);

    console.log("form data", formData);
    try {
      const response = await axios.post(
        "https://68ac-54-83-111-179.ngrok-free.app",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Assuming the response structure matches the one you've provided:
      const imageUrls = response.data.image.image_urls;

      // Convert image URLs to base64 with error handling
      const base64Images = await Promise.all(
        response.data.image.image_urls.map(async (url) => {
          try {
            const imageResponse = await fetch(url);
            if (!imageResponse.ok) throw new Error("Failed to fetch image");
            const blob = await imageResponse.blob();
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          } catch (error) {
            console.error("Error converting image to base64:", error);
            return null; // Handle this in the UI as needed
          }
        })
      );

      // Filter out any failed conversions
      const validBase64Images = base64Images.filter(Boolean);

      // Ensure there are valid images before dispatching
      if (validBase64Images.length > 0) {
        // Dispatch the saveUserActivity action with converted images
        dispatch(
          saveUserActivity({
            userId: user.id, // Replace with actual user ID
            imageUrls: validBase64Images,
            promptDescription: "",
          })
        );
      }
      setGeneratedImages(imageUrls); // Save the image URLs into the state

      console.log("response", response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
    console.log("generatedImages", generatedImages);
  });

  const closeModal = () => {
    setSelectedImage(null);
  };

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
    setIsLoadingImageUpload(true);
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
    } finally {
      setIsLoadingImageUpload(false);
    }
  };

  const handleCopy = () => {
    toast.success("Text copied to clipboard!");
  };

  return (
    <div className="container-fluid min-h-screen p-8 bg-[#fdfefd]">
      <div className="">
        <div className="bg-[#f0ebea] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between h-auto md:h-24">
          <div className="flex items-center gap-3 md:mb-0">
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
              <FaUser className="w-8 h-8" />
              <span className="absolute bottom-0 px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 translate-y-full bg-gray-800 rounded-md opacity-0 left-1/2 group-hover:opacity-100">
                Profile
              </span>
            </Link>
            <Link
              to="/home"
              className="relative text-[#9d5e7b] d-felx justify-center align-items-center  transition-colors duration-300 hover:text-[#b59481] group ">
              <FaHome className="w-10 h-10" />
              <span className="absolute bottom-0 px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 translate-y-full bg-gray-800 rounded-md opacity-0 left-1/2 group-hover:opacity-100">
                Home
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mt-8">
          <div className="flex-1 min-w-[300px]">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCreateWithText}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithText
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                 Text to image
              </button>
              <button
                onClick={handleCreateWithImage}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithImage
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                Image to text
              </button>
              <button
                onClick={handleCreateWithTextAndImage}
                className={`flex-1 min-w-[200px] px-5 py-4 rounded-lg transition-all duration-300 custom-btn ${
                  isCreateWithTextAndImage
                    ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                    : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
                }`}>
                Image to image
              </button>
            </div>

            <div
              className={`${
                isCreateWithTextAndImage
                  ? "opacity-100"
                  : "opacity-0 -translate-y-8"
              } transition-all duration-500`}>
              {isCreateWithTextAndImage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="">
                  <div className="">
                    <h2 className="text-2xl mt-8 font-bold text-[#9d5e7b] custom-btn">
                      Create with Text and Image
                    </h2>
                    <p className="mb-4  text-[#9d5e7b] custom-btn">
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
                        onChange={(e) =>
                          handleFileInputForImage(e.target.files[0])
                        }
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
                    <p className="mb-4 mt-4 text-[#9d5e7b] custom-btn">
                      Add your text.
                    </p>
                    <div className="relative">
                      <textarea
                        className={`w-full p-4 pr-40 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] resize-none shadow-md ${
                          enhancingLoading
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        rows="6"
                        placeholder="Enter your text here... Enhance your text"
                        value={textValue}
                        onChange={handleTextChange}
                        disabled={enhancingLoading}></textarea>

                      <button
                        className={`absolute bottom-4 right-4 flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] transition-all duration-300 shadow-lg ${
                          textValue && !enhancingLoading
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                        onClick={handleEnhanceText}
                        disabled={enhancingLoading}>
                        <span className="mr-2 animate-wiggle form-labels">
                          🧙‍♂️ Enhance
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="transition-all duration-500">
              <div
                className={`${
                  showDesignTypeDropdown
                    ? "opacity-100"
                    : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {isCreateWithText && showDesignTypeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="">
                    <div className="mt-8">
                      <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                        Create with Text
                      </h2>
                      <p className="mb-4 text-[#9d5e7b] custom-btn">
                        Select your design type to begin your designing journey
                      </p>
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
                  </motion.div>
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
                  showStrength ? "opacity-100" : "opacity-0 -translate-y-8"
                } transition-all duration-500`}>
                {showStrength && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                      Select the Strangth of the image you want to generate
                    </h2>
                    <div className="mt-4">
                      <select
                        className="w-full cursor-pointer p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
                        value={strengthImages}
                        onChange={handleImageStrengthChange}>
                        {[0.1, 0.2, 0.3, 0.4].map((num) => (
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
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="">
                    <div className="mt-8">
                      {/* <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                        Create with Text
                      </h2> */}
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
                          }`}
                          onClick={handleEnhanceText}
                          disabled={enhancingLoading}>
                          <span className="mr-2 animate-wiggle form-labels">
                            🧙‍♂️ Enhance your text
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="container p-4 mx-auto">
                {isCreateWithImage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8">
                    <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn">
                      Create with image
                    </h2>
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

                    {isLoadingImageUpload && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 custom-generated-div">
                        <div className="flex items-center justify-center h-screen">
                          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full loader animate-spin"></div>
                        </div>
                      </motion.div>
                    )}

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
            </div>

            {/* {isCreateWithText && (
              <button
                onClick={handleGenerateImageWithText}
                className="w-full form-labels mt-4 px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )}
            {isCreateWithTextAndImage && (
              <button
                onClick={handleGenerateImageWithTextAndImage}
                className="w-full mt-4 form-labels px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )} */}
          </div>

          <div className="flex-1 min-w-[300px]">
            
            <div className="bg-[#f0ebea] rounded-lg p-4">
            {isCreateWithText && (
              <button
                onClick={handleGenerateImageWithText}
                className="w-full form-labels mt-2 fs-5 px-7 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )}
            {isCreateWithTextAndImage && (
              <button
                onClick={handleGenerateImageWithTextAndImage}
                className="w-full mt-2 form-labels px-7 fs-5 py-7 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white">
                Generate Images
              </button>
            )}
              <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn mt-4">
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
        <History generatedImages={generatedImages} />
      </div>
    </div>
  );
};

export default UserDashboard;
