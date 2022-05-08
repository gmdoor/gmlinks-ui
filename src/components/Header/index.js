import React from "react";

function Header() {
  return (
    <div
      className="bg-zinc-800 w-full flex justify-end border-b border-white"
      style={{ maxHeight: "64px" }}
    >
      <div className="m-4">
        <span className="px-2 py-1 text-white cursor-pointer border border-white rounded-md">
          Connect Wallet
        </span>
      </div>
    </div>
  );
}
export default Header;
