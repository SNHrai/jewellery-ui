import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaBriefcase, FaUser, FaArrowLeft } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);

  const navigate = useNavigate();

  // Hardcoded user information
  const userInfo = {
    firstName: 'John',
    lastName: 'Doe',
    mobileNumber: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
    country: 'United States',
    profession: 'Software Engineer',
  };

  const images = [
    { id: 1, src: 'https://via.placeholder.com/100?text=Item+1', alt: 'Search item 1' },
    { id: 2, src: 'https://via.placeholder.com/100?text=Item+2', alt: 'Search item 2' },
    { id: 3, src: 'https://via.placeholder.com/100?text=Item+3', alt: 'Search item 3' },
    { id: 4, src: 'https://via.placeholder.com/100?text=Item+4', alt: 'Search item 4' },
    { id: 5, src: 'https://via.placeholder.com/100?text=Item+5', alt: 'Search item 5' },
    { id: 6, src: 'https://via.placeholder.com/100?text=Item+6', alt: 'Search item 6' },
  ];

  const visibleImages = showMoreImages ? images : images.slice(0, 3);

  const onClickHandler = () => {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfefd] py-12">
      <button className="absolute top-4 left-4 text-[#9d5e7b] hover:text-[#9d5e7b]/90 focus:outline-none" onClick={onClickHandler}>
        <FaArrowLeft size={24} />
      </button>
      <div className="relative flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <FaUser className="text-[#9d5e7b] text-6xl mb-4" />
          <h2 className="text-4xl font-bold text-[#9d5e7b] mb-4 custom-btn">Profile</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
          <div className="flex items-center text-[#9d5e7b]">
            <FaUser className="mr-2" />
            <span className="font-semibold button-fonts">First Name: </span>
            <span className="ml-2 form-labels-data">{userInfo.firstName}</span>
          </div>
          <div className="flex items-center text-[#9d5e7b]">
            <FaUser className="mr-2" />
            <span className="font-semibold button-fonts">Last Name: </span>
            <span className="ml-2 form-labels-data">{userInfo.lastName}</span>
          </div>
          <div className="flex items-center text-[#9d5e7b]">
            <FaPhoneAlt className="mr-2" />
            <span className="font-semibold button-fonts">Mobile Number: </span>
            <span className="ml-2 form-labels-data">{userInfo.mobileNumber}</span>
          </div>
          <div className="flex items-center text-[#9d5e7b]">
            <FaEnvelope className="mr-2" />
            <span className="font-semibold button-fonts">Email: </span>
            <span className="ml-2 form-labels-data">{userInfo.email}</span>
          </div>
          <div className="flex items-center text-[#9d5e7b]">
            <FaGlobe className="mr-2" />
            <span className="font-semibold button-fonts">Country: </span>
            <span className="ml-2 form-labels-data">{userInfo.country}</span>
          </div>
          <div className="flex items-center text-[#9d5e7b]">
            <FaBriefcase className="mr-2" />
            <span className="font-semibold button-fonts">Profession: </span>
            <span className="ml-2 form-labels-data">{userInfo.profession}</span>
          </div>
        </div>
        <Button
          variant="outline-secondary"
          onClick={() => setShowHistory(!showHistory)}
          className="text-[#9d5e7b] form-labels-data hover:bg-[#9d5e7b] hover:text-white border-[#9d5e7b] transition-colors mb-4"
        >
          {showHistory ? 'Hide Search History' : 'Show Search History'}
        </Button>
        {showHistory && (
          <div className="w-full mt-6">
            <h3 className="text-2xl font-bold text-[#9d5e7b] mb-4">Search History</h3>
            <div className="flex flex-wrap gap-4">
              {visibleImages.map((image) => (
                <div key={image.id} className="flex flex-col items-center p-4 bg-[#ebdfd8] rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mb-2 rounded-lg"
                  />
                  <span className="text-[#9d5e7b]">{image.alt}</span>
                </div>
              ))}
            </div>
            {!showMoreImages && images.length > 3 && (
              <div className="w-full mt-4 text-center">
                <button
                  onClick={() => setShowMoreImages(true)}
                  className="view-more-button"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
