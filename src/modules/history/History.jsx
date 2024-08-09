import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserActivity } from "../../app/activity/userActivityImageSlice";
import { useUser } from "../../context/user";
import { Tilt } from "react-tilt";

function HistoryCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Tilt options={{ max: 25, scale: 1.05 }}>
      <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-2xl">
        <div className="relative">
          <img
            src={`data:${item.imageType};base64,${item.downloadedImage}`}
            alt={item.promptDescription}
            className="object-cover w-full h-48"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-sm font-semibold text-white">
              {new Date(item.generatedDateTime).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-2 text-xl font-bold text-gray-800">
            {isExpanded ? item.promptDescription : `${item.promptDescription.slice(0, 100)}...`}
          </h2>
          {item.promptDescription.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline"
            >
              {isExpanded ? "View Less" : "View More"}
            </button>
          )}
          <p className="text-sm text-gray-600">ID: {item.id}</p>
        </div>
      </div>
    </Tilt>
  );
}

function History() {
  const { user } = useUser();
  const dispatch = useDispatch();

  const { activities, status, error } = useSelector(
    (state) => state.userActivityImage
  );

  useEffect(() => {
    dispatch(getUserActivity(user?.id));
  }, [dispatch, user]);

  useEffect(() => {
    console.log("activities", activities);
    console.log("status", status);
    console.log("error", error);
  }, [activities]);

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Creation History
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item) => (
            <HistoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
     
    </>
  );
}

export default History;
