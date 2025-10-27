// import React from "react";
// import Banner from "../../Components/Banner/Banner";
// import Container from "../../Components/Container";
// import useProduct from "../../Hook/useProduct";
// import AppsCard from "../../Components/AppsCard/AppsCard";
// import { Link } from "react-router-dom";
// import Skeleton from "../../Components/LoadingSpiner/Skeleton";

// const Home = () => {
//   const { product, loading } = useProduct();

//   const featuredProduct = product.slice(0, 8);

//   return (
//     <div>
//       <Banner />

//       <Container>
//         <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
//           <div className="space-y-3 sm:space-y-4 text-center">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900">
//               Trending Apps
//             </h2>
//             <p className="text-[#627382] text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto">
//               Explore All Trending Apps on the Market developed by us
//             </p>
//           </div>
//         </div>

//         {/* trending app container */}
//         {loading ? (
//           <Skeleton />
//         ) : (
//           <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//             {featuredProduct.map((singProduct) => (
//               <AppsCard key={singProduct.id} singProduct={singProduct} />
//             ))}
//           </div>
//         )}

//         <div className="my-5 sm:my-8 md:my-10 lg:my-12 flex items-center justify-center">
//           <Link to={"apps"}>
//             <h2 className="text-base sm:text-lg md:text-xl capitalize text-center btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto rounded-md hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors">
//               Show All
//             </h2>
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container";
import useProduct from "../../Hook/useProduct";
import AppsCard from "../../Components/AppsCard/AppsCard";
import { Link } from "react-router-dom"; // ✅ Confirm this
import Skeleton from "../../Components/LoadingSpiner/Skeleton";

const Home = () => {
  const { product, loading } = useProduct();
  const featuredProduct = product.slice(0, 8);

  return (
    <div>
      <Banner />
      <Container>
        {/* ... your existing home content ... */}
        <div className="my-5 sm:my-8 md:my-10 lg:my-12 flex items-center justify-center">
          <Link to="/apps">
            {" "}
            {/* ✅ Confirm this */}
            <button className="text-base sm:text-lg md:text-xl capitalize text-center btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors">
              Show All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
