// import React, { useEffect, useState } from "react";

// import { Inbox } from "lucide-react";
// import Container from "../../Components/Container";
// import { Link } from "react-router-dom";
// import InstallAppCard from "../../Components/AppsCard/InstallAppCard";

// const Installation = () => {
//   const [install, setInstall] = useState([]);
//   console.log(install);

//   const [sortInstallApp, setSortInstallApp] = useState("none");

//   useEffect(() => {
//     const localStorageApp =
//       JSON.parse(localStorage.getItem("installApps")) || [];
//     setInstall(localStorageApp);
//   }, []);

//   const sortingInstallApp = (() => {
//     if (sortInstallApp === "asc") {
//       return [...install].sort(
//         (valueA, valueB) => valueA.reviews - valueB.reviews
//       );
//     } else if (sortInstallApp === "desc") {
//       return [...install].sort(
//         (valueA, valueB) => valueB.reviews - valueA.reviews
//       );
//     } else {
//       return install;
//     }
//   })();

//   return (
//     <Container>
//       <div className="my-5 flex items-center justify-between">
//         <div>
//           <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
//             Install apps{" "}
//             <span className="text-base font-normal text-gray-500">
//               ({install ? install.length : "0"})
//             </span>
//           </h2>
//         </div>
//         <div>
//           <label>
//             <select
//               onChange={(e) => setSortInstallApp(e.target.value)}
//               value={sortInstallApp}
//               defaultValue="Pick a color"
//               className="select"
//             >
//               <option disabled={true}>Sort Install apps</option>
//               <option value={"asc"}>Low &gt; high</option>
//               <option value={"dsc"}>high &gt; low</option>
//             </select>
//           </label>
//         </div>
//       </div>

//       {sortingInstallApp && install.length > 0 ? (
//         sortingInstallApp.map((installApps) => (
//           <InstallAppCard
//             setInstall={setInstall}
//             key={installApps.id}
//             installApps={installApps}
//           />
//         ))
//       ) : (
//         <div className="min-h-[60vh] bg-gradient-to-r from-base-300 to-base-200 flex items-center justify-center ">
//           <div className="text-center p-6">
//             <Inbox className="w-20 h-20 text-accent mx-auto mb-4 animate-spin-slow" />
//             <h1 className="text-4xl font-extrabold text-primary mb-3">
//               No Apps Installed Yet
//             </h1>
//             <p className="text-base text-base-content/80 mb-6 max-w-sm">
//               Your app collection is empty! Discover amazing apps to get
//               started.
//             </p>
//             <Link to="/apps" className="btn btn-primary btn-md">
//               Explore Apps Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Installation;

import React, { useEffect, useState } from "react";
import { Inbox } from "lucide-react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import InstallAppCard from "../../Components/AppsCard/InstallAppCard";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortInstallApp, setSortInstallApp] = useState("none");

  useEffect(() => {
    const localStorageApp =
      JSON.parse(localStorage.getItem("installApps")) || [];
    setInstall(localStorageApp);
  }, []);

  // ✅ FIXED: Sorting function
  const sortingInstallApp = (() => {
    if (sortInstallApp === "asc") {
      return [...install].sort(
        (valueA, valueB) => valueA.reviews - valueB.reviews
      );
    } else if (sortInstallApp === "desc") {
      return [...install].sort(
        (valueA, valueB) => valueB.reviews - valueA.reviews
      );
    } else {
      return install;
    }
  })();

  console.log("🔍 Sorting State:", sortInstallApp);
  console.log("📊 Sorted Apps:", sortingInstallApp);

  return (
    <Container>
      <div className="my-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
            Install apps{" "}
            <span className="text-base font-normal text-gray-500">
              ({install ? install.length : "0"})
            </span>
          </h2>
        </div>
        <div>
          <label>
            <select
              onChange={(e) => setSortInstallApp(e.target.value)}
              value={sortInstallApp}
              className="select select-bordered">
              <option value="none" disabled>
                Sort Install apps
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {sortingInstallApp && install.length > 0 ? (
        <div>
          {/* Sorting Info Display */}
          {sortInstallApp !== "none" && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm">
                Sorted by reviews:{" "}
                <span className="font-semibold">
                  {sortInstallApp === "asc" ? "Low to High" : "High to Low"}
                </span>
              </p>
            </div>
          )}

          {/* Render sorted apps */}
          {sortingInstallApp.map((installApps) => (
            <InstallAppCard
              setInstall={setInstall}
              key={installApps.id}
              installApps={installApps}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] bg-gradient-to-r from-base-300 to-base-200 flex items-center justify-center">
          <div className="text-center p-6">
            <Inbox className="w-20 h-20 text-accent mx-auto mb-4 animate-spin-slow" />
            <h1 className="text-4xl font-extrabold text-primary mb-3">
              No Apps Installed Yet
            </h1>
            <p className="text-base text-base-content/80 mb-6 max-w-sm">
              Your app collection is empty! Discover amazing apps to get
              started.
            </p>
            <Link to="/apps" className="btn btn-primary btn-md">
              Explore Apps Now
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Installation;
