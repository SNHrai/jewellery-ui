import React from 'react';
import './Review.css';

const Review = ({ review }) => {
  return (
    <div>
    <div className="review">
      <div className="review-header">
        <div className="review-avatar">
          {review.avatar}
        </div>
        <div className="review-info">
          <div className="review-name">{review.name}</div>
          <div className="review-date">{review.date}</div>
        </div>
      </div>
      <div className="review-body">
        <div className="review-rating">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
        <div className="review-text">{review.text}</div>
        <div className="review-read-more">Read more</div>
      </div>
    </div>
    </div>
    
  );
};

export default Review;
