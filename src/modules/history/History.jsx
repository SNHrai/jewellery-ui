import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HistoryContainer = styled.div`
  background-color: #f0ebea;
  padding: 24px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  color: #9d5e7b;
  margin-bottom: 16px; /* 4 */
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px; /* Adjust the gap as needed */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Card = styled(motion.div)`
  background-color: #fdfefd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid #ebdfd8;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
 
  &:hover {
    background-color: #ebdfd8;
    border-color: #9d5e7b;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Query = styled.p`
  color: #9d5e7b;
  font-size: 1rem;
  text-align: center;
`;

const ViewAllContainer = styled.div`
  margin-top: 16px; /* 4 */
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ViewAllLink = styled.a`
  color: #9d5e7b;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #b59481;
  }
`;

function History() {
  const searchHistory = [
    { id: 1, query: "Text to Image: Sunset over the mountains" },
    { id: 2, query: "Image to Text: Recipe for a chocolate cake" },
    { id: 3, query: "Text to Image: A futuristic cityscape" },
    // Add more history items as needed
  ];

  return (
    <>
      <div className="custom-btn ">
        <Title>Creation History</Title>
      </div>
      <HistoryContainer>
        <CardsContainer>
          {searchHistory.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              <div className="p-4">
                <div className="overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                  <div className="p-6">
                    {/* <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                      CATEGORY
                    </h2> */}
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      {item.query}
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex flex-wrap items-center">
                      {/* <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                      {/* <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 lg:ml-auto md:ml-0">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-400">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </CardsContainer>
        <ViewAllContainer>
          <ViewAllLink href="/all-history">View All History</ViewAllLink>
        </ViewAllContainer>
      </HistoryContainer>
    </>
  );
}

export default History;