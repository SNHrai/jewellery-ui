import React from "react";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-[#f0ebea] rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-gray-700">
          Something went wrong
        </h1>

        <p className="mt-2 text-gray-500">
          We couldn't find the page you're looking for, but you can try going
          back to the home page.
        </p>

        <div className="flex justify-center mt-8 space-x-4">
          <a
            href="/"
            className="px-4 py-2 text-white rounded-md bg-[#9d5e7b]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
