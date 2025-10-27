import React from "react";

const Skeleton = ({ count = 8 }) => {
  return (
    <>
      <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {Array.from({ length: count }).map((_, key) => (
          <div key={key} className="flex w-full flex-col gap-4">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-3 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-7 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skeleton;
