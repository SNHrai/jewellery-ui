import React, { useEffect, useState } from "react";
import { getAuthToken } from "../../util/handler";
import { useUser } from "../../context/user";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./history.css"

function HistoryDashboard() {
  const { user } = useUser();
  const [allUserActivity, setAllUserActivity] = useState([]);

  console.log("user", user);

  useEffect(() => {
    const fetchAllUserActivity = async () => {
      const token = getAuthToken();
      const response = await fetch(
        `http://localhost:8080/api/activities/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setAllUserActivity(data);
    };

    fetchAllUserActivity();
  }, [user]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">
        Activity History
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allUserActivity.map((activity) => (
          <Link
            key={activity.id}
            to={`/activity-details/${activity.id}`}
            className="group"
          >
            <motion.div
              className="overflow-hidden bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={`data:${activity.imageType};base64,${activity.downloadedImage}`}
                  alt={activity.promptDescription}
                  className="object-cover w-full h-64"
                />
                <div className="redirect-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-600">
                  {format(
                    new Date(activity.generatedDateTime),
                    "MMMM d, yyyy HH:mm"
                  )}
                </p>
                <p className="mb-2 text-lg font-semibold text-gray-800 transition-all duration-300 line-clamp-2 hover:line-clamp-none">
                  {activity.promptDescription}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
  
}

export default HistoryDashboard;
