import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom"; 
import Container from "../../Components/Container";
import useProduct from "../../Hook/useProduct";
import AppsCard from "../../Components/AppsCard/AppsCard";
import Skeleton from "../../Components/LoadingSpiner/Skeleton";

const Apps = () => {
  const { product, loading } = useProduct();
  const [searchApp, setSearchApps] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { id } = useParams(); 


  const queryId = searchParams.get("id");
  const pathId = id;
  const urlId = pathId || queryId; 
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchApps(value);
    if (value.trim().length > 0) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  };

  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showLoading]);

  const readyToSearch = searchApp.trim().toLocaleLowerCase();
  const searchProducts = readyToSearch
    ? product.filter((singApps) =>
        singApps.title.toLocaleLowerCase().includes(readyToSearch)
      )
    : product;

  //  Find product by ID
  let foundProduct = null;
  if (urlId) {
    foundProduct = product.find((item) => item.id === parseInt(urlId));
    console.log("🎯 Found Product:", foundProduct);
  }

  
  const renderContent = () => {
    if (loading) {
      return <Skeleton count={20} />;
    }

    if (urlId && !foundProduct) {
      return (
        <div className="mt-8 flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-gray-200">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-red-500"
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

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                App Not Found
              </h3>
              <p className="text-lg text-gray-600">
                App with ID{" "}
                <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                  "{urlId}"
                </span>{" "}
                doesn't exist.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Available IDs: 1 to 20
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/apps")}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all">
                View All Apps
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:from-[#9F62F2] hover:to-[#632EE3] transition-all">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

  
    if (showLoading) {
      return (
        <div className="mt-8 flex justify-center items-center py-20 bg-white rounded-lg border">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-gray-700">
              Searching for "{searchApp}"...
            </p>
          </div>
        </div>
      );
    }

  
    if (urlId && foundProduct) {
      return (
        <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-green-700">
                📱 Showing app with ID:{" "}
                <span className="font-bold">{urlId}</span>
              </p>
              <button
                onClick={() => navigate("/apps")}
                className="text-sm text-green-600 hover:text-green-800 underline">
                View All Apps
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <AppsCard key={foundProduct.id} singProduct={foundProduct} />
          </div>
        </div>
      );
    }

   
    return (
      <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {searchProducts.map((singProduct) => (
          <AppsCard key={singProduct.id} singProduct={singProduct} />
        ))}
      </div>
    );
  };

  return (
    <Container>
      <div className="my-8 sm:my-10 md:my-12 lg:my-16">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center space-y-3 sm:space-y-4">
          <h2>Our All Applications</h2>
          <p className="text-zinc-500 font-normal text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 sm:mt-8 md:mt-10 lg:mt-12 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold capitalize">
              Apps Found{" "}
              <span className="font-normal">
                {urlId && foundProduct ? "(1)" : `(${searchProducts.length})`}
              </span>
            </h3>
            {urlId && (
              <p className="text-sm text-gray-500">
                URL ID:{" "}
                <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                  {urlId}
                </span>
                {foundProduct && (
                  <span className="ml-2 text-green-600">✓ Found</span>
                )}
                {!foundProduct && (
                  <span className="ml-2 text-red-600">✗ Not Found</span>
                )}
              </p>
            )}
          </div>

          <div className="w-full sm:w-auto">
            <label className="input flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 w-full max-w-md">
              <svg
                className="h-4 sm:h-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={searchApp}
                onChange={handleSearchChange}
                type="search"
                className="grow text-sm sm:text-base bg-transparent focus:outline-none"
                placeholder="Search Apps by Name"
              />
              {showLoading && (
                <div className="w-4 h-4 border-2 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
              )}
            </label>
          </div>
        </div>

        {/* Render Content */}
        {renderContent()}
      </div>
    </Container>
  );
};

export default Apps;
