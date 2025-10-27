import { Search } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-300 to-base-200 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <Search className="w-24 h-24 text-accent mx-auto mb-6 animate-pulse" />
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-4">
          404 - Oops, page not found!
        </h1>
        <p className="text-lg  text-base-content/80 mb-8 max-w-md">
          The page you're searching for is out of orbit! Head back to AppVibe to
          explore our apps.
        </p>
        <Link
          to="/"
          className=" btn text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none "
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
