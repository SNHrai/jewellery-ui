import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing experience! Highly recommended.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and beautiful designs.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    rating: 5,
    comment: "Absolutely loved it! Will come back for more.",
  },
];

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the new review to a backend service.
    console.log(newReview);
    setShowForm(false); // Close form after submission
  };

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="mb-8 text-center">
        <div className="section-head col-sm-12" style={{ marginTop: "100px" }}>
          <h4>
            <span>What Our</span> Client Say
          </h4>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Read the reviews from our satisfied customers.
        </p>
      </div>

      {/* Reviews List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="p-6 transition-shadow duration-500 bg-white rounded-lg shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05 }}>
            <div className="flex items-center mb-4">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
            <h5 className="mb-2 text-xl font-semibold text-gray-800">
              {review.name}
            </h5>
            <p className="text-gray-600">{review.comment}</p>
          </motion.div>
        ))}
      </div>

      {/* Add Review Button */}
      <div className="flex justify-center mt-12">
        <button
          className="px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700"
          onClick={toggleForm}>
          {showForm ? "Close" : "Add Review"}
        </button>
      </div>

      {/* Review Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="max-w-lg p-8 mx-auto mt-12 bg-white rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Add Your Review
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Rating</label>
                <select
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200"
                  required>
                  <option value="0">Select Rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Comment</label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200"
                  rows="4"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700">
                  Submit Review
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewSection;
