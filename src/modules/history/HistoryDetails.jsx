import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuthToken } from "../../util/handler";
import { FaHistory, FaHome, FaUser } from "react-icons/fa";
import { Tilt } from "react-tilt";
import "./history.css"

function HistoryDetails() {
  const [userActivity, setUserActivity] = useState();
  const urlParam = useParams();

  useEffect(() => {
    const fetchUserActivity = async () => {
      const token = getAuthToken();
      const response = await fetch(
        `http://localhost:8080/api/activities/image/${urlParam?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setUserActivity(data);
    };

    fetchUserActivity();
  }, [urlParam]);

  return (
    <div className="container-fluid min-h-screen p-12 bg-[#fdfefd]">
      {userActivity && (
        <div className="overflow-hidden bg-white shadow-2xl rounded-xl">
          <Tilt options={{ max: 25, scale: 1.05 }}>
            <div className="relative shadow-2xl">
              <img
                src={`data:${userActivity.imageType};base64,${userActivity.downloadedImage}`}
                alt={userActivity.promptDescription}
                className="object-cover w-full h-96"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm font-semibold text-white">
                  {new Date(userActivity.generatedDateTime).toLocaleString()}
                </p>
              </div>
            </div>
          </Tilt>
          <div className="p-6">
            <p className="mb-4 text-gray-800 card-details-prompt">
              {userActivity.promptDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryDetails;
