// ! Get data from local storage
export const localInstallApps = () => {
  try {
    const data = localStorage.getItem("installApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error fetching local storage:", err);
    return [];
  }
};

// ! Save data to local storage

export const localUpdateApps = (product) => {
  const installApp = localInstallApps();
  try {
    const isDuplicateInstallApps = installApp.some(
      (app) => app.id === product.id
    );
    if (isDuplicateInstallApps) {
      return { success: false, message: "This app is already installed!" };
    }
    const updateLocalInstallApps = [...installApp, product];
    localStorage.setItem("installApps", JSON.stringify(updateLocalInstallApps));
    return { success: true, message: "App installed successfully!" };
  } catch (error) {
    console.error("Error saving to local storage:", error);
    return { success: false, message: "Failed to install app." };
  }
};




// ! Delete data from local storage
export const removeLocalStorageInstallApp = (id) => {
  console.log(id);

  const installApp = localInstallApps();
  try {
    const updateLocalInstallApps = installApp.filter((app) => app.id !== id);

    localStorage.setItem("installApps", JSON.stringify(updateLocalInstallApps));
    return {
      success: true,
      message: "App uninstalled successfully!",
      updatedApps: updateLocalInstallApps,
    };
  } catch (error) {
    console.error("Error removing from local storage:", error);
    return {
      success: false,
      message: "Failed to uninstall app.",
      updatedApps: installApp,
    };
  }
};
