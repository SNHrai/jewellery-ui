import React, { useState, useRef } from "react";
import "./Dashboard.css";

const UserDashboard = () => {
  const [isCreateWithText, setIsCreateWithText] = useState(true);
  const [isCreateWithImage, setIsCreateWithImage] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateWithText = () => {
    setIsCreateWithText(true);
    setIsCreateWithImage(false);
  };

  const handleCreateWithImage = () => {
    setIsCreateWithText(false);
    setIsCreateWithImage(true);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
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
      setImage(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // const handleGenerateImage = () => {
  //   // Logic to generate images based on textValue or image
  //   // For demonstration purposes, we'll use some dummy images
  //   const dummyImages = [
  //     "https://via.placeholder.com/300x200?text=Image+1",
  //     "https://via.placeholder.com/300x200?text=Image+2",
  //     "https://via.placeholder.com/300x200?text=Image+3",
  //     "https://via.placeholder.com/300x200?text=Image+4",
  //   ];
  //   setGeneratedImages(dummyImages);
  // };

  // const handleImageSelect = (image) => {
  //   setSelectedImage(image);
  // };

  const handleGenerateImageWithText = () => {
    setIsLoading(true);

    // Simulate a delay of 5-6 seconds
    setTimeout(() => {
      // Logic to generate images based on textValue
      const dummyImages = [
        "https://via.placeholder.com/300x200?text=Image+1",
        "https://via.placeholder.com/300x200?text=Image+2",
        "https://via.placeholder.com/300x200?text=Image+3",
        "https://via.placeholder.com/300x200?text=Image+4",
      ];
      setGeneratedImages(dummyImages); // Update the state with the generated images
      setIsLoading(false);
    }, Math.random() * 2000 + 4000); // Random delay between 4-6 seconds
  };

  const handleGenerateImageWithImage = () => {
    setIsLoading(true);

    // Simulate a delay of 5-6 seconds
    setTimeout(() => {
      // Logic to generate images based on image
      const dummyImages = [
        "https://via.placeholder.com/300x200?text=Image+1",
        "https://via.placeholder.com/300x200?text=Image+2",
        "https://via.placeholder.com/300x200?text=Image+3",
        "https://via.placeholder.com/300x200?text=Image+4",
      ];
      setGeneratedImages(dummyImages); // Update the state with the generated images
      setIsLoading(false);
    }, Math.random() * 2000 + 1000); // Random delay between 4-6 seconds
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="min-h-screen p-8 bg-[#fdfefd]">
  <div className="">
    <div className="bg-[#f0ebea] rounded-lg p-6">
      <div className="flex items-center gap-3">
        <span className="text-[#9d5e7b] font-semibold form-labels">
          REMAINING FREE CREATIVE CREDITS: 1
        </span>
        <button className="custom-btn  relative px-4 py-2 text-white rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]">
          Subscribe Now
        </button>
      </div>
    </div>
    {/* Flex container for sections */}
    <div className="flex flex-wrap gap-10 mt-8">
      {/* Section 1 */}
      <div className="flex-1 min-w-[300px]">
        <div className="flex gap-4 mt-2">
          <button
            onClick={handleCreateWithText}
            className={`w-64 px-7 py-7 rounded-lg transition-all duration-300 custom-btn ${
              isCreateWithText
                ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
            }`}
          >
            Create with Text
          </button>
          <button
            onClick={handleCreateWithImage}
            className={`w-64 px-7 py-7 ml-2 rounded-lg transition-all duration-300 custom-btn ${
              isCreateWithImage
                ? "bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] text-white scale-105"
                : "bg-[#f0ebea] text-[#9d5e7b] hover:bg-gradient-to-r hover:from-[#b59481] hover:to-[#f0ebea] hover:scale-105"
            }`}
          >
            Create with Image
          </button>
        </div>

        <div className="transition-all duration-500">
          <div
            className={`${
              isCreateWithText ? "opacity-100" : "opacity-0 -translate-y-8"
            } transition-all duration-500`}
          >
            {isCreateWithText && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn ">
                  Create with Text
                </h2>
                <p className="mb-4 text-[#9d5e7b] custom-btn ">
                  Select a template and add your text.
                </p>
                <div className="relative">
                  <textarea
                    className="w-full p-4 rounded-lg bg-[#f0ebea] text-[#9d5e7b] focus:outline-none focus:ring-2 focus:ring-[#9d5e7b]"
                    rows="4"
                    placeholder="Enter your text here..."
                    value={textValue}
                    onChange={handleTextChange}
                  ></textarea>
                  <button
                    className={`absolute bottom-4 right-4 flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#9d5e7b] to-[#b59481] text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] transition-all duration-300 ${
                      textValue ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } group`}
                  >
                    <span className="mr-2 animate-wiggle form-labels">🧙‍♂️ Enhance your text</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${
              isCreateWithImage ? "opacity-100" : "opacity-0 -translate-y-8"
            } transition-all duration-500`}
          >
            {isCreateWithImage && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#9d5e7b] custom-btn ">
                  Create with Image
                </h2>
                <p className="mb-4 text-[#9d5e7b] custom-btn ">
                  Select a template and add your image.
                </p>
                <div className="upload-container">
                  <input
                    type="file"
                    id="file-upload"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={handleFileInput}
                  />
                  <label
                    htmlFor="file-upload"
                    className={`upload-area w-full p-4 rounded-lg bg-[#f0ebea] ${
                      dragActive ? "drag-active" : ""
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt="Uploaded"
                        className="uploaded-image"
                      />
                    ) : (
                      <div className="text-[#9d5e7b] custom-btn ">Drag & Drop your image here</div>
                    )}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex-1 min-w-[300px]">
        <div className="transition-all duration-500">
          <div
            className={`${
              isCreateWithText ? "opacity-100" : "opacity-0 -translate-y-8"
            } transition-all duration-500 relative`}
          >
            {isCreateWithText && (
              <div className="mt-2 mb-4">
                <button
                  onClick={handleGenerateImageWithText}
                  className={`w-full px-6 py-3 text-white transition-all duration-300 rounded-lg h-[12vh] bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] flex items-center justify-center relative ${
                    isLoading ? "loading" : ""
                  }`}
                >
                  <span className="mr-2 button-fonts ">Generate Image with Text</span>
                  <div className="absolute inset-0 flex items-center justify-center loader-overlay">
                    <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div
            className={`${
              isCreateWithImage ? "opacity-100" : "opacity-0 -translate-y-8"
            } transition-all duration-500 relative`}
          >
            {isCreateWithImage && (
              <div className="mb-4">
                <button
                  onClick={handleGenerateImageWithImage}
                  className={`relative flex items-center justify-center w-full h-20 px-6 py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#9d5e7b] to-[#b59481] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-[#9d5e7b] ${
                    isLoading ? "loading" : ""
                  }`}
                >
                  <span className="mr-2 button-fonts ">Generate Image with Image</span>
                  <div className="absolute inset-0 flex items-center justify-center loader-overlay">
                    <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-[#f0ebea] rounded-lg min-h-96">
          <div className="relative p-4 mx-auto bg-[#f0ebea] rounded-lg">
            <div className="absolute top-2 left-2">
              {/* <img
                src="/gimini-logo.svg"
                alt="Gimini Logo"
                className="w-8 h-8"
              /> */}
            </div>
            {generatedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {generatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer image-container group"
                    onClick={() => handleImageSelect(image)}
                  >
                    <img
                      src={image}
                      alt={`Generated Image ${index + 1}`}
                      className="w-full h-[24vh] transition-all duration-300 rounded-lg group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 overlay group-hover:opacity-100">
                      <span className="font-bold text-white">View</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                {/* No images generated yet. */}
              </div>
            )}
          </div>
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="max-w-full max-h-full animate-scale"
              />
              <button
                className="absolute text-white transition-colors duration-300 top-2 right-2 hover:text-red-500"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default UserDashboard;
