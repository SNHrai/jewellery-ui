import React from "react"
import Review from "./Review"
import "./ReviewSection.css"

const reviews = [
  {
    avatar: "r",
    name: "reet sethi",
    date: "11 March 2024",
    rating: 4,
    text: "Stumbled upon their website online and was impressed by the seamless browsing experience.The collection at...",
  },
  {
    avatar: "A",
    name: "Akansha Sethi",
    date: "10 March 2024",
    rating: 5,
    text: "Came across reia on instagram and visited their website and loved their designs. I was genuinely impressed with the...",
  },
  {
    avatar: "S",
    name: "SHREYA JOHAR",
    date: "7 March 2024",
    rating: 4,
    text: "The collection at Reia is amazing. Loved all of their jewellery pieces. The design was unique and beautiful. The staff...",
  },
]

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="review-company">
        {/* <div className="company-logo">
          <img src="path/to/company/logo.png" alt="Reia Diamonds" />
        </div> */}
        {/* <div className="company-info">
          <div className="company-name">Reia Diamonds | Exquisite Lab Grown Diamond Jewellery</div>
          <div className="company-rating">★★★★★</div>
          <div className="company-reviews-count">44 Google reviews</div>
          <button className="write-review-button">Write a review</button>
        </div> */}
      </div>
      <div className="section-head col-sm-12" style={{marginTop:"100px"}}>
        <h4>
          <span>Our</span> Review
        </h4>
      </div>
      <div className="reviews">
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
