// import React, { useState } from "react";
// import downLoadImg from "../../assets/icon-downloads.png";
// import ratingImg from "../../assets/icon-ratings.png";
// import ReviewsImg from "../../assets/icon-review.png";
// import Container from "../../Components/Container";
// import { localInstallApps, localUpdateApps } from "../../Utils/LocalStorage";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

// const ProductDetails = ({ findProduct }) => {
//   const [isInstalled, setIsInstalled] = useState(false);

//   const { id } = findProduct;

//   const handleInstall = () => {
//     const includingLocalData = localInstallApps();
//     const found = includingLocalData.some((foundData) => foundData.id === id);

//     if (found) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "You have already install this app",
//       });
//     } else {
//       Swal.fire({
//         title: "Successfully install this app",
//         text: "You click and close",
//         icon: "success",
//       });
//     }

//     // !don't touch this
//     localUpdateApps(findProduct);
//     setIsInstalled(true);
//   };

//   const {
//     image,
//     title,
//     companyName,
//     ratingAvg,
//     reviews,
//     size,
//     fullDescription,
//     downloads,
//     ratings,
//   } = findProduct || {};

//   return (
//     <>
//       <Container>
//         <div className="flex items-start  gap-10 ">
//           <div className="flex-1 w-full h-full">
//             <figure className="  rounded-md  overflow-hidden">
//               <img className="w-full h-full" src={image} alt="product image" />
//             </figure>
//           </div>
//           <div className="flex-2">
//             <div className="space-y-1">
//               <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-zinc-900">
//                 {title}
//               </h2>
//               <p className="text-gray-500 font-normal text-lg">
//                 Developed by {"  "}
//                 <span className="text-info cursor-pointer">{companyName}</span>
//               </p>
//             </div>
//             <hr className="text-zinc-300 mt-5 font-bold" />

//             <div className="flex items-center mt-5 md:mt-6 gap-10 ">
//               <div className="flex items-center justify-center flex-col space-y-1">
//                 <figure>
//                   <img src={downLoadImg} alt="download" />
//                 </figure>
//                 <p>Downloads </p>
//                 <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
//                   {downloads}
//                 </span>
//               </div>
//               <div className="flex items-center justify-center flex-col  space-y-1">
//                 <figure>
//                   <img src={ratingImg} alt="download" />
//                 </figure>
//                 <p>Average Ratings </p>
//                 <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
//                   {ratingAvg}
//                 </span>
//               </div>
//               <div className="flex items-center justify-center flex-col  space-y-1">
//                 <figure>
//                   <img src={ReviewsImg} alt="download" />
//                 </figure>
//                 <p>Total Reviews </p>
//                 <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
//                   {reviews}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={handleInstall}
//               disabled={isInstalled}
//               className={`btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white mt-5 ${
//                 isInstalled ? "opacity-50 cursor-not-allowed " : ""
//               }`}
//             >
//               {isInstalled ? "Installed" : `Install Now (${size} MB)`}
//             </button>
//           </div>
//         </div>

//         {/* rechart  */}

//         <div className="space-y-3 mt-5 md:mt-8">
//           <h3 className="text-lg md:text-2xl font-semibold text-zinc-900 border-b-2 border-gray-900 w-fit mb-3">
//             Apps Ratings
//           </h3>
//           <div className="my-10" style={{ width: "100%", height: 300 }}>
//             <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
//               Ratings
//             </h2>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={ratings}
//                 layout="vertical"
//                 margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis dataKey="name" type="category" />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#FF9800" barSize={20} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* product description  */}
//         <div className="mt-5 md:mt-10">
//           <h2 className="text-lg md:text-2xl font-semibold text-zinc-900 border-b-2 border-gray-900 w-fit mb-3 ">
//             Description
//           </h2>
//           <p className="text-zinc-500 text-base">{fullDescription}</p>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import downLoadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import ReviewsImg from "../../assets/icon-review.png";
import Container from "../../Components/Container";
import { localInstallApps, localUpdateApps } from "../../Utils/LocalStorage";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProductDetails = ({ findProduct }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  const { id, size, title } = findProduct;

  // ✅ FIXED: Check install status from localStorage
  useEffect(() => {
    const checkInstallStatus = () => {
      try {
        // Check from installApps array
        const installedApps = localInstallApps();
        const isAppInstalled = installedApps.some((app) => app.id === id);

        // Also check from installStatus (backup)
        const installStatus =
          JSON.parse(localStorage.getItem("installStatus")) || {};
        const isStatusInstalled = installStatus[id] || false;

        setIsInstalled(isAppInstalled || isStatusInstalled);
      } catch (error) {
        console.error("Error checking install status:", error);
      }
    };

    checkInstallStatus();


    window.addEventListener("storage", checkInstallStatus);
    return () => window.removeEventListener("storage", checkInstallStatus);
  }, [id]);

 
  const handleInstall = () => {
    if (isInstalled) return;

    setIsInstalling(true);

    setTimeout(() => {
      try {
    
        const installStatus =
          JSON.parse(localStorage.getItem("installStatus")) || {};
        installStatus[id] = true;
        localStorage.setItem("installStatus", JSON.stringify(installStatus));

        //  Add to installApps 
        const result = localUpdateApps(findProduct);

        // Update UI state
        setIsInstalled(true);

        if (result.success) {
          Swal.fire({
            title: "Successfully installed!",
            text: `${title} has been installed`,
            icon: "success",
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "Already Installed",
            text: result.message,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Install error:", error);
        Swal.fire({
          icon: "error",
          title: "Install Failed",
          text: "Something went wrong",
          timer: 1500,
        });
      }

      setIsInstalling(false);
    }, 600);
  };

  const {
    image,
    companyName,
    ratingAvg,
    reviews,
    fullDescription,
    downloads,
    ratings,
  } = findProduct || {};

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          <div className="flex-1 w-full">
            <figure className="rounded-md overflow-hidden">
              <img className="w-full h-auto" src={image} alt="product image" />
            </figure>
          </div>
          <div className="flex-1 lg:flex-2">
            <div className="space-y-2">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-zinc-900">
                {title}
              </h2>
              <p className="text-gray-500 font-normal text-lg">
                Developed by {"  "}
                <span className="text-info cursor-pointer">{companyName}</span>
              </p>
            </div>
            <hr className="text-zinc-300 mt-5 font-bold" />

            <div className="flex items-center mt-5 md:mt-6 gap-6 lg:gap-10 flex-wrap">
              <div className="flex items-center justify-center flex-col space-y-1">
                <figure>
                  <img src={downLoadImg} alt="download" />
                </figure>
                <p>Downloads</p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {downloads}
                </span>
              </div>
              <div className="flex items-center justify-center flex-col space-y-1">
                <figure>
                  <img src={ratingImg} alt="download" />
                </figure>
                <p>Average Ratings</p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {ratingAvg}
                </span>
              </div>
              <div className="flex items-center justify-center flex-col space-y-1">
                <figure>
                  <img src={ReviewsImg} alt="download" />
                </figure>
                <p>Total Reviews</p>
                <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-zinc-900">
                  {reviews}
                </span>
              </div>
            </div>

            {/* Install Button with proper states */}
            <div className="mt-5">
              {isInstalled ? (
                <button
                  disabled
                  className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg cursor-not-allowed opacity-90 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Installed
                </button>
              ) : isInstalling ? (
                <button
                  disabled
                  className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Installing... ({size} MB)
                </button>
              ) : (
                <button
                  onClick={handleInstall}
                  className="px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:from-[#9F62F2] hover:to-[#632EE3] transition-all duration-300 shadow-md hover:shadow-lg">
                  Install Now ({size} MB)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="space-y-3 mt-8 md:mt-12">
          <h3 className="text-lg md:text-2xl font-semibold text-zinc-900 border-b-2 border-gray-900 w-fit mb-3">
            Apps Ratings
          </h3>
          <div className="my-10" style={{ width: "100%", height: 300 }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Ratings
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratings}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#FF9800" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-lg md:text-2xl font-semibold text-zinc-900 border-b-2 border-gray-900 w-fit mb-3">
            Description
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            {fullDescription}
          </p>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
