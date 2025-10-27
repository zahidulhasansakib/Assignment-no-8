import React from "react";
import { Download } from "lucide-react";
import { removeLocalStorageInstallApp } from "../../Utils/LocalStorage";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const InstallAppCard = ({ installApps, setInstall }) => {
  const { image, size, ratingAvg, shortDescription, title, downloads, id } =
    installApps;

  const handleRemoveInstallApp = (id) => {
    Swal.fire({
      title: "Apps successfully uninstall",
      text: "You click and close!",
      icon: "success",
    });
    //! remove from local store
    removeLocalStorageInstallApp(id);
    setInstall((previous) => previous.filter((p) => p.id !== id));
  };

  return (
    <div className="my-5 sm:my-5 border border-[#632EE3] flex flex-col sm:flex-row p-3 sm:p-4 rounded-md gap-4 sm:gap-5  w-full mx-auto">
      <div className="flex-shrink-0">
        <figure className="w-20 sm:w-24 h-auto overflow-hidden rounded-md">
          <img
            src={image}
            alt="install apps"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl truncate">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 line-clamp-2">
              {shortDescription}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <span className="flex items-center gap-1 text-purple-600 text-sm sm:text-base">
                <Download size={16} className="sm:w-5 sm:h-5" /> {downloads}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 text-sm sm:text-base">
                <Download size={16} className="sm:w-5 sm:h-5" /> {ratingAvg}
              </span>
              <span className="flex items-center gap-1 text-green-500 text-sm sm:text-base">
                <Download size={16} className="sm:w-5 sm:h-5" /> {size} MB
              </span>
            </div>
          </div>
          <button
            onClick={() => handleRemoveInstallApp(id)}
            className="btn capitalize bg-red-200 text-red-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-red-300 hover:text-red-600 transition-colors w-full sm:w-auto"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallAppCard;
