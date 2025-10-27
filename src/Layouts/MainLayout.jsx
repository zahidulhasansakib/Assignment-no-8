// import React from "react";
// import Navbar from "../Components/Header/Navbar";
// import Footer from "../Components/Footer/Footer";
// import { Outlet } from "react-router";

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col h-screen ">
//       <Navbar />
//       <div className="flex-1">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

// MainLayout.jsx - Updated version
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

// Loading Component
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#632EE3] via-[#8B48F2] to-[#9F62F2] z-50">
      <div className="text-center p-8">
        <div className="w-32 h-32 border-8 border-white/30 border-t-white rounded-full animate-spin mb-8 mx-auto shadow-2xl"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
          AppVibe
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6">
          Loading Awesome Apps...
        </p>
        <div className="flex justify-center space-x-3">
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}></div>
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}></div>
          <div
            className="w-4 h-4 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

const MainLayout = () => {
  const [loading, setLoading] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    console.log(" Current path:", location.pathname);

 
    setLoading(true);

    const timer = setTimeout(() => {
      console.log("✅ Loading finished");
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;