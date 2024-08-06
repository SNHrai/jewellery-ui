import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaBriefcase,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled Components
const ProfileContainer = styled.div`
  min-height: 100vh;
  background-color: #fdfefd;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem; /* 3xl */
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #9d5e7b;
  margin-bottom: 32px; /* 4 */
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #9d5e7b;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    color: #b59481;
  }
`;

const ProfileCard = styled(motion.div)`
  background-color: #ffffff;
  padding: 48px;
  border-radius: 24px;
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
  border: 2px solid #ebdfd8;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  position: relative;
  margin-bottom: 32px;
`;

const ProfileImage = styled.div`
  flex: 0 0 150px;
  height: 150px;
  background: #ebdfd8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #9d5e7b;
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
`;

const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #9d5e7b;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  & > svg {
    margin-right: 16px;
  }
`;

const ButtonStyled = styled(Button)`
  color: #9d5e7b;
  border-color: #9d5e7b;
  margin-top: 16px;

  &:hover {
    background-color: #9d5e7b;
    color: white;
  }
`;

const HistoryContainer = styled(motion.div)`
  background-color: #f0ebea;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  width: 100%;
  max-width: 1000px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background-color: #fdfefd;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid #ebdfd8;
  cursor: pointer;
  width: 300px;
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #ebdfd8;
    border-color: #9d5e7b;
  }
`;

const Query = styled.p`
  color: #9d5e7b;
  font-size: 1.125rem;
`;

const ViewAllContainer = styled.div`
  margin-top: 32px;
  text-align: right;
`;

const ViewAllLink = styled.a`
  color: #9d5e7b;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #b59481;
  }
`;

const Profile = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);

  const navigate = useNavigate();

  const searchHistory = [
    { id: 1, query: "Text to Image: Sunset over the mountains" },
    { id: 2, query: "Image to Text: Recipe for a chocolate cake" },
    { id: 3, query: "Text to Image: A futuristic cityscape" },
  ];

  const userInfo = {
    firstName: "John",
    lastName: "Doe",
    mobileNumber: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    country: "United States",
    profession: "Software Engineer",
  };

  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/100?text=Item+1",
      alt: "Search item 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/100?text=Item+2",
      alt: "Search item 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/100?text=Item+3",
      alt: "Search item 3",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/100?text=Item+4",
      alt: "Search item 4",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/100?text=Item+5",
      alt: "Search item 5",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/100?text=Item+6",
      alt: "Search item 6",
    },
  ];

  const visibleImages = showMoreImages ? images : images.slice(0, 3);

  const onClickHandler = () => {
    navigate("/dashboard");
  };

  return (
    <ProfileContainer>
      <BackButton onClick={onClickHandler}>
        <FaArrowLeft />
      </BackButton>
      <ProfileCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileImage>
          <FaUser />
        </ProfileImage>
        <ProfileDetails>
          <Header />
          <Title>Profile</Title>
          <DetailItem>
            <FaUser />
            <span>First Name: {userInfo.firstName}</span>
          </DetailItem>
          <DetailItem>
            <FaUser />
            <span>Last Name: {userInfo.lastName}</span>
          </DetailItem>
          <DetailItem>
            <FaPhoneAlt />
            <span>Mobile Number: {userInfo.mobileNumber}</span>
          </DetailItem>
          <DetailItem>
            <FaEnvelope />
            <span>Email: {userInfo.email}</span>
          </DetailItem>
          <DetailItem>
            <FaGlobe />
            <span>Country: {userInfo.country}</span>
          </DetailItem>
          <DetailItem>
            <FaBriefcase />
            <span>Profession: {userInfo.profession}</span>
          </DetailItem>
          <ButtonStyled
            variant="outline-secondary"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide Search History" : "Show Search History"}
          </ButtonStyled>
          <ButtonStyled
            variant="outline-secondary"
            onClick={() => setShowMoreImages(!showMoreImages)}
          >
            {showMoreImages ? "Show Fewer Images" : "Show More Images"}
          </ButtonStyled>
        </ProfileDetails>
      </ProfileCard>
      {showHistory && (
        <HistoryContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardsContainer>
            {visibleImages.map((item) => (
              <Card
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.src} alt={item.alt} />
                <h2 className="text-lg font-medium text-[#9d5e7b]">
                  {item.alt}
                </h2>
                <Query>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</Query>
              </Card>
            ))}
          </CardsContainer>
          <ViewAllContainer>
            <ViewAllLink href="/all-history">View All History</ViewAllLink>
          </ViewAllContainer>
        </HistoryContainer>
      )}
    </ProfileContainer>
  );
};

export default Profile;
