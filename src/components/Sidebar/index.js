import React from "react";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  return (
    <div className="h-screen flex flex-col bg-black">
      <img className="m-4 w-3/5" src="/logo.svg" />
      <div>
        <div
          className="flex flex-row text-white hover:bg-gray-800 cursor-pointer px-4 py-2 rounded-md m-4"
          onClick={() => history.push("/profile")}
        >
          <img src="/profile_icon.svg" />
          <span className="ml-2">Profile</span>
        </div>
        <div
          className="flex flex-row text-white hover:bg-gray-800 cursor-pointer px-4 py-2 rounded-md m-4"
          onClick={() => history.push("/")}
        >
          <img src="/link_icon.svg" />
          <span className="ml-2">Links</span>
        </div>
        <div
          className="flex flex-row text-white hover:bg-gray-800 cursor-pointer px-4 py-2 rounded-md m-4"
          onClick={() => history.push("/purchases")}
        >
          <img src="/purchases_icon.svg" />
          <span className="ml-2">Purchases</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
