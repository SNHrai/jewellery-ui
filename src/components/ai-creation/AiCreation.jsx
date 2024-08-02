// import React, { useEffect, useRef, useState } from "react";
// import Sidebar from "../sidebar/Sidebar";
// import { Container } from "@mui/material";
// import "./aicreation.css";
// import handsign from "../../util/images/handsign.svg";
// import heroImage from "../../util/images/jewellery.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCloudUploadAlt,
//   faInfoCircle,
//   faSpinner,
// } from "@fortawesome/free-solid-svg-icons";
// import { Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// import Dropzone from "react-dropzone";
// import "../../App.css";
// import { Link } from "react-router-dom";
// import { NeatGradient } from "@firecms/neat";

// const useStyles = makeStyles((theme) => ({
//   dropzone: {
//     border: "2px dashed #ccc",
//     borderRadius: "8px",
//     padding: "20px",
//     textAlign: "center",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: "#f5f5f5",
//     },
//   },
//   uploadIcon: {
//     fontSize: "3rem",
//     color: "#888",
//     marginBottom: "10px",
//   },
//   uploadText: {
//     fontSize: "1.2rem",
//     color: "#555",
//   },
//   spinner: {
//     marginTop: "10px",
//   },
// }));

// function AiCreation() {
//   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
//   const [activeTab, setActiveTab] = useState("text");
//   const classes = useStyles();
//   const [file, setFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const canvasRef = useRef(null);
//   const gradientRef = useRef(null);

//   const handleDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//   };

//   const handleUpload = () => {
//     setIsUploading(true);
//     // Perform upload logic here
//     setTimeout(() => {
//       setIsUploading(false);
//     }, 3000); // Simulating upload delay
//   };

//   const handleGenerateImage = () => {
//     setIsGenerating(true);
//     // Perform image generation logic here
//     setTimeout(() => {
//       setGeneratedImage("https://via.placeholder.com/500x300"); // Replace with actual generated image URL
//       setIsGenerating(false);
//     }, 5000); // Simulating image generation delay
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     gradientRef.current = new NeatGradient({
//       ref: canvasRef.current,

//       colors: [
//         {
//           color: "#FFFFFF",
//           enabled: true,
//         },
//         {
//           color: "#FFDEBB",
//           enabled: true,
//         },
//         {
//           color: "#FBECC1",
//           enabled: true,
//         },
//         {
//           color: "#E4E4E4",
//           enabled: true,
//         },
//         {
//           color: "#F6FFFF",
//           enabled: true,
//         },
//       ],
//       speed: 2,
//       horizontalPressure: 2,
//       verticalPressure: 5,
//       waveFrequencyX: 2,
//       waveFrequencyY: 4,
//       waveAmplitude: 3,
//       shadows: 7,
//       highlights: 6,
//       colorBrightness: 1,
//       colorSaturation: 1,
//       wireframe: false,
//       colorBlending: 7,
//       backgroundColor: "#0b3954",
//       backgroundAlpha: 1,
//       resolution: 1,
//     });
//     return gradientRef.current.destroy;
//   }, [canvasRef.current]);

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "text":
//         return (
//           <div className="flex flex-col items-center w-full">
//             {/* <h2 className="mb-4 text-2xl font-bold">Create with Text</h2> */}
//             <div className="w-full mb-4">
//               {/* <label
//                 className="block mb-2 font-bold text-gray-700"
//                 htmlFor="description">
//                 Description
//               </label> */}
//               <textarea
//                 className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline"
//                 id="description"
//                 rows="4"
//                 placeholder="Describe what you want to create, holding any feature or  style."
//               />
//               <div className="relative">
//                 <span className="absolute top-2 right-2">
//                   <OverlayTrigger
//                     placement="left"
//                     overlay={
//                       <Tooltip>
//                         <strong>How to describe?</strong>
//                         <br />
//                         Click the link below for guidance.
//                       </Tooltip>
//                     }>
//                     <Link
//                       to="/how-to-describe"
//                       className="text-blue-500 hover:text-blue-700">
//                       <FontAwesomeIcon icon={faInfoCircle} size="sm" />
//                     </Link>
//                   </OverlayTrigger>
//                 </span>
//               </div>
//             </div>
//           </div>
//         );
//       case "image":
//         return (
//           <div className="flex flex-col items-center w-full">
//             <div className="relative w-full mb-4">
//               <OverlayTrigger
//                 placement="top"
//                 overlay={<Tooltip>Upload Image</Tooltip>}>
//                 <Dropzone onDrop={handleDrop}>
//                   {({ getRootProps, getInputProps }) => (
//                     <div {...getRootProps()} className={classes.dropzone}>
//                       <input {...getInputProps()} />
//                       <FontAwesomeIcon
//                         icon={faCloudUploadAlt}
//                         className={classes.uploadIcon}
//                       />
//                       <p className={classes.uploadText}>
//                         Drag and drop or click to upload
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         JPG, GIF, PNG up to 10MB
//                       </p>
//                     </div>
//                   )}
//                 </Dropzone>
//               </OverlayTrigger>
//               {file && (
//                 <div className="mt-4">
//                   <p className="font-bold text-gray-700">Selected File:</p>
//                   <p className="text-gray-600">{file.name}</p>
//                   <button
//                     className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
//                     onClick={handleUpload}
//                     disabled={isUploading}>
//                     {isUploading ? (
//                       <>
//                         <Spinner
//                           as="span"
//                           animation="border"
//                           size="sm"
//                           role="status"
//                           aria-hidden="true"
//                           className={classes.spinner}
//                         />
//                         Uploading...
//                       </>
//                     ) : (
//                       "Upload"
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="z-10 flex">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div
//         className={`flex-grow p-4 transition-all duration-300 bg-gray-50 ${
//           isSidebarOpen ? "ml-64" : "ml-20"
//         }`}>
//         <Container className="z-10 ">
          
//           <div className="mt-4">
//             {/* style={{ minHeight: "80vh", backgroundImage: `url(${heroImage})` }} */}
//             <div className="absolute inset-0 z-0">
//               <canvas ref={canvasRef} className="w-full h-full" />
//             </div>
//             <div className="z-10 justify-around p-8 bg-center bg-cover rounded-lg shadow-lg hero-image d-flex backdrop-blur-3xl ">
//               <div className="" style={{ width: "50%" }}>
//                 <div className="flex gap-3 p-2 rounded w-fit glass-effect">
//                   <div className="gap-3">
//                     <span>Remaining creative counts: </span>
//                     <span>5</span>
//                   </div>
//                   <div className="flex gap-2 ">
//                     {/* animate-wiggle */}
//                     <span className="fa-layers fa-fw ">
//                       <img
//                         src={handsign}
//                         alt="img"
//                         className="mt-1 animate-left-right"
//                       />
//                     </span>
//                     <button className="btn-font">subscribe</button>
//                   </div>
//                 </div>

//                 <div className="mt-3">
//                   <div className="w-full max-w-md p-8 rounded-lg glass-effect">
//                     <div className="flex justify-between mb-6">
//                       <button
//                         className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
//                           activeTab === "text"
//                             ? "bg-blue-500 text-white"
//                             : "bg-gray-200 text-gray-700"
//                         }`}
//                         onClick={() => setActiveTab("text")}>
//                         Create with Text
//                       </button>
//                       <button
//                         className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
//                           activeTab === "image"
//                             ? "bg-blue-500 text-white"
//                             : "bg-gray-200 text-gray-700"
//                         }`}
//                         onClick={() => setActiveTab("image")}>
//                         Create with Image
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full max-w-md p-8 mt-3 rounded-lg backdrop-blur-sm glass-effect">
//                   <div>{renderTabContent()}</div>
//                 </div>
//               </div>
//               <div className="w-full max-w-md">
//                 <div className="p-8 rounded-lg mt-14 backdrop-blur-sm glass-effect">
//                   <button
//                     className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-green-500 rounded hover:bg-green-700"
//                     onClick={handleGenerateImage}
//                     disabled={!file && isGenerating}>
//                     {isGenerating ? (
//                       <>
//                         <FontAwesomeIcon
//                           icon={faSpinner}
//                           spin
//                           className="mr-2 animate-spin"
//                         />
//                         Generating...
//                       </>
//                     ) : (
//                       "Generate Image"
//                     )}
//                   </button>
//                   {generatedImage && (
//                     <div className="mt-4 animate-fade-in">
//                       <img
//                         src={generatedImage}
//                         alt="Generated Image"
//                         className="rounded-lg shadow-lg"
//                       />
//                     </div>
//                   )}
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           </div>
//         </Container>
//         {/* Additional UserDashboard content */}
//       </div>
//     </div>
//   );
// }

// export default AiCreation;
