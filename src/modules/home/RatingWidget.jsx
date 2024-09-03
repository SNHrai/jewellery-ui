// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './RatingWidgets.css'; // Assuming you put the CSS in this file

// const RatingWidget = () => {
//   const [rating, setRating] = useState(5);
//   const [feedback, setFeedback] = useState('Great experience!');
//   const [submitted, setSubmitted] = useState(false);

//   const handleRatingChange = (e) => {
//     setRating(parseInt(e.target.value));
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleEdit = () => {
//     setSubmitted(false);
//   };

//   return (
//     <div className="container container-review">
//       {submitted ? (
//         <div className="post">
//           <div className="text">Thanks for rating us!</div>
//           <div className="edit" onClick={handleEdit}>
//             Edit
//           </div>
//         </div>
//       ) : (
//         <div className="star-widget">
//           <input
//             name="rate"
//             type="radio"
//             id="rate-5"
//             value="5"
//             checked={rating === 5}
//             onChange={handleRatingChange}
//           />
//           <label htmlFor="rate-5" className="fas fa-star"></label>
//           <input
//             name="rate"
//             type="radio"
//             id="rate-4"
//             value="4"
//             checked={rating === 4}
//             onChange={handleRatingChange}
//           />
//           <label htmlFor="rate-4" className="fas fa-star"></label>
//           <input
//             name="rate"
//             type="radio"
//             id="rate-3"
//             value="3"
//             checked={rating === 3}
//             onChange={handleRatingChange}
//           />
//           <label htmlFor="rate-3" className="fas fa-star"></label>
//           <input
//             name="rate"
//             type="radio"
//             id="rate-2"
//             value="2"
//             checked={rating === 2}
//             onChange={handleRatingChange}
//           />
//           <label htmlFor="rate-2" className="fas fa-star"></label>
//           <input
//             name="rate"
//             type="radio"
//             id="rate-1"
//             value="1"
//             checked={rating === 1}
//             onChange={handleRatingChange}
//           />
//           <label htmlFor="rate-1" className="fas fa-star"></label>
//           <form onSubmit={handleSubmit}>
//             <header>
//               {rating === 1 && ''}
//               {rating === 2 && ""}
//               {rating === 3 && ''}
//               {rating === 4 && ''}
//               {rating === 5 && ''}
//             </header>
//             <div className="textarea">
//               <textarea
//                 cols="30"
//                 placeholder="Describe your experience..."
//                 value={feedback}
//                 onChange={handleFeedbackChange}
//                 style={{ height: '100px' }}
//               ></textarea>
//             </div>
//             <div className="btn">
//               <button type="submit">Post</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RatingWidget;
