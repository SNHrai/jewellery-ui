import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-avatar">{review.avatar}</div>
      <div className="review-content">
        <div className="review-header">
          <span className="review-name">{review.name}</span>
          <span className="review-date">{review.date}</span>
        </div>
        <div className="review-rating">{"★".repeat(review.rating)}</div>
        {review.text ? (
          <div className="review-text">{review.text}</div>
        ) : (
          <div className="review-empty-box"></div>
        )}
      </div>
    </div>
  );
};

export default Review;
