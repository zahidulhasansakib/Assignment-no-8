// src/Pages/Err/AppNotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/Container";

const AppNotFound = () => {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center">
          {/* App Not Found Icon */}
          <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-16 h-16 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* App Not Found Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            App Not Found
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
            The app you're looking for doesn't exist in our collection.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apps"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Apps
            </Link>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
            <p className="text-sm text-blue-700">
              💡 Browse all available apps from the Apps page
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppNotFound;
