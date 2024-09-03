// // import React from "react"
// // import Review from "./Review"
// // import "./ReviewSection.css"

// // const reviews = [
// //   {
// //     avatar: "r",
// //     name: "reet sethi",
// //     date: "11 March 2024",
// //     rating: 4,
// //     text: "",
// //   },
// //   {
// //     avatar: "A",
// //     name: "Akansha Sethi",
// //     date: "10 March 2024",
// //     rating: 5,
// //     text: "",
// //   },
// //   {
// //     avatar: "S",
// //     name: "SHREYA JOHAR",
// //     date: "7 March 2024",
// //     rating: 4,
// //     text: "",
// //   },
// // ]

// // const ReviewSection = () => {
// //   return (
// //     <div className="review-section">
// //       <div className="review-company">
// //         {/* <div className="company-logo">
// //           <img src="path/to/company/logo.png" alt="Reia Diamonds" />
// //         </div> */}
// //         {/* <div className="company-info">
// //           <div className="company-name">Reia Diamonds | Exquisite Lab Grown Diamond Jewellery</div>
// //           <div className="company-rating">★★★★★</div>
// //           <div className="company-reviews-count">44 Google reviews</div>
// //           <button className="write-review-button">Write a review</button>
// //         </div> */}
// //       </div>
// //       <div className="section-head col-sm-12" style={{ marginTop: "100px" }}>
// //         <h4>
// //           <span>Our</span> Review
// //         </h4>
// //       </div>
// //       <div className="reviews">
// //         {reviews.map((review, index) => (
// //           <Review key={index} review={review} />
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default ReviewSection
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar } from 'react-icons/fa';

// const reviews = [
//   {
//     id: 1,
//     name: 'John Doe',
//     rating: 5,
//     comment: 'Amazing experience! Highly recommended.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     rating: 4,
//     comment: 'Great service and beautiful designs.',
//   },
//   {
//     id: 3,
//     name: 'Emily Johnson',
//     rating: 5,
//     comment: 'Absolutely loved it! Will come back for more.',
//   },
// ];

// const ReviewSection = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

//   const toggleForm = () => setShowForm(!showForm);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview({ ...newReview, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the new review to a backend service.
//     console.log(newReview);
//     setShowForm(false); // Close form after submission
//   };

//   return (
//     <div className="container px-4 py-16 mx-auto">
//       <div className="mb-8 text-center">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           What Our <span className="text-primary">Customers Say</span>
//         </h2>
//         <p className="text-lg text-gray-600">
//           Read the reviews from our satisfied customers.
//         </p>
//       </div>
      
//       {/* Reviews List */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {reviews.map((review) => (
//           <motion.div
//             key={review.id}
//             className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="flex items-center mb-4">
//               {Array(review.rating)
//                 .fill()
//                 .map((_, i) => (
//                   <FaStar key={i} className="text-yellow-500" />
//                 ))}
//             </div>
//             <h5 className="mb-2 text-xl font-semibold text-gray-800">
//               {review.name}
//             </h5>
//             <p className="text-gray-600">{review.comment}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Add Review Button */}
//       <div className="flex justify-center mt-12">
//         <button
//           className="px-6 py-3 text-white transition-colors rounded-md bg-primary hover:bg-secondary"
//           onClick={toggleForm}
//         >
//           {showForm ? 'Close' : 'Add Review'}
//         </button>
//       </div>

//       {/* Review Form */}
//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             className="max-w-md p-8 mx-auto mt-8 bg-white rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="mb-4 text-2xl font-semibold text-gray-800">
//               Add Your Review
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={newReview.name}
//                   onChange={handleInputChange}
//                   className="w-full p-2 mt-1 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Rating</label>
//                 <select
//                   name="rating"
//                   value={newReview.rating}
//                   onChange={handleInputChange}
//                   className="w-full p-2 mt-1 border border-gray-300 rounded"
//                   required
//                 >
//                   <option value="0">Select Rating</option>
//                   <option value="5">5 - Excellent</option>
//                   <option value="4">4 - Very Good</option>
//                   <option value="3">3 - Good</option>
//                   <option value="2">2 - Fair</option>
//                   <option value="1">1 - Poor</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Comment</label>
//                 <textarea
//                   name="comment"
//                   value={newReview.comment}
//                   onChange={handleInputChange}
//                   className="w-full p-2 mt-1 border border-gray-300 rounded"
//                   rows="4"
//                   required
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 text-white transition-colors rounded-md bg-primary hover:bg-secondary"
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ReviewSection;
