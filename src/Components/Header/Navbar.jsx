// import React from "react";
// import mainLogo from "../../assets/logo.png";
// import Container from "../Container";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const ContributeButton = (
//     <>
//       <a
//         href="https://github.com/rashedulraha"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto"
//       >
//         Contribute
//       </a>
//     </>
//   );

//   const navbarLink = (
//     <>
//       <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
//         <NavLink to={"/"} className="px-2 py-1">
//           <span className="text-lg font-normal md:font-semibold hover:text-[#632EE3] transition-colors">
//             Home
//           </span>
//         </NavLink>
//         <NavLink to={"/apps"} className="px-2 py-1">
//           <span className="text-lg font-normal md:font-semibold hover:text-[#632EE3] transition-colors">
//             Apps
//           </span>
//         </NavLink>
//         <NavLink to={"/installation"} className="px-2 py-1">
//           <span className="text-lg font-normal md:font-semibold hover:text-[#632EE3] transition-colors">
//             Installation
//           </span>
//         </NavLink>
//         <NavLink to={"/PrivacyPolicy"} className="px-2 py-1">
//           <span className="text-lg font-normal md:font-semibold hover:text-[#632EE3] transition-colors">
//             PrivacyPolicy
//           </span>
//         </NavLink>
//       </div>
//     </>
//   );

//   const DropdownMenuBar = (
//     <>
//       <div className="dropdown dropdown-end">
//         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 font-bold"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h8m-8 6h16"
//             />
//           </svg>
//         </div>
//         <div
//           tabIndex={0}
//           className="menu menu-sm dropdown-content bg-gray-100 rounded-b-md z-10 mt-2 w-48 sm:w-64 text-left shadow-lg"
//         >
//           <div className="bg-white rounded-md py-4 px-3 flex flex-col gap-4">
//             {navbarLink}
//             <div className="flex sm:hidden">{ContributeButton}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <div className="shadow-sm bg-white">
//       <Container>
//         <div className="navbar py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
//           <div className="navbar-start">
//             <a
//               href="/"
//               className="cursor-pointer text-xl flex items-center gap-2"
//             >
//               <figure className="w-10 h-10">
//                 <img
//                   className="w-full h-full object-contain"
//                   src={mainLogo}
//                   alt="Website Main logo"
//                 />
//               </figure>
//               <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
//                 AppVibe
//               </span>
//             </a>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <div className="menu menu-horizontal px-1">{navbarLink}</div>
//           </div>
//           <div className="navbar-end flex items-center gap-3 sm:gap-4">
//             <div className="hidden sm:flex">{ContributeButton}</div>
//             {DropdownMenuBar}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import mainLogo from "../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router-dom"; // ✅ Fixed import

const Navbar = () => {
  const ContributeButton = (
    <a
      href="https://github.com/rashedulraha"
      target="_blank"
      rel="noopener noreferrer"
      className="btn text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto">
      Contribute
    </a>
  );

  const navbarLink = (
    <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Installation
      </NavLink>
    </div>
  );

  // ... rest of your navbar code (same as before)
  return (
    <div className="shadow-sm bg-white">
      <Container>
        <div className="navbar py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            <NavLink
              to="/"
              className="cursor-pointer text-xl flex items-center gap-2">
              <figure className="w-10 h-10">
                <img
                  className="w-full h-full object-contain"
                  src={mainLogo}
                  alt="Website Main logo"
                />
              </figure>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                AppVibe
              </span>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">{navbarLink}</div>
          <div className="navbar-end flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex">{ContributeButton}</div>
            {/* Dropdown menu code here */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;