// src/App.js - Full Screen Large Loading
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import Navbar from "./components/Navbar";

// Full Screen Large Loading Component
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#632EE3] via-[#8B48F2] to-[#9F62F2] z-50 min-h-screen">
      <div className="text-center">
        {/* Large Spinner */}
        <div className="w-32 h-32 border-8 border-white/30 border-t-white rounded-full animate-spin mb-8 mx-auto"></div>

        {/* Large Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
          AppVibe
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-6">
          Loading Awesome Apps...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-3 bg-white/30 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-white animate-[progress_2s_ease-in-out_infinite] w-3/4"></div>
        </div>

        <style jsx>{`
          @keyframes progress {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
