import React from 'react';
import underConstructionImage from "../../util/images/undraw_under_construction_-46-pa.svg";
const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={underConstructionImage}
        alt="Under Construction"
        className="max-w-md mb-8"
      />
      <h1 className="mb-4 text-4xl font-bold">Coming Soon</h1>
      <p className="text-lg text-gray-600">
        We're working hard to bring you an amazing experience. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoonPage;
