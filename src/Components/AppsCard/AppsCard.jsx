import { Eye, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ singProduct }) => {
  const {
    image,
    companyName,
    downloads,
    title,
    size,
    shortDescription,
    ratingAvg,
    id,
  } = singProduct;

  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition ease-in w-full max-w-sm sm:max-w-md">
      <div className="card">
        <figure className="w-full h-48 sm:h-56">
          <img
            src={image}
            alt={shortDescription}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </figure>

        <div className="mx-4 mt-4 sm:mt-5 space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
            {title}
          </h2>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4  pb-6">
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
          {shortDescription}
        </p>

        {/* Stats */}
        <div className="flex justify-between mb-5 sm:mb-6 gap-2 sm:gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Size</p>
            <p className="font-semibold text-sm sm:text-base">{size}MB</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Downloads</p>
            <p className="font-semibold text-sm sm:text-base">{downloads}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Rating</p>
            <div className="flex items-center justify-center">
              <span className="font-semibold mr-1 text-sm sm:text-base">
                {ratingAvg}
              </span>
              <span>
                <Star size={18} color="#facc15" />
              </span>
            </div>
          </div>
        </div>

        {/* View Button */}
        <Link
          to={`/productDetails/${id}`}
          className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-3 capitalize cursor-pointer hover:from-[#9F62F2] hover:to-[#632EE3]"
        >
          <Eye size={20} strokeWidth={2.25} />
          View App Details
        </Link>
      </div>
    </div>
  );
};

export default AppsCard;
