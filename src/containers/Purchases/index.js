import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useHistory } from "react-router-dom";

function Purchases() {
  const history = useHistory();

  const showPurchases = () => {
    return (
      <div className="flex flex-col bg-zinc-800 h-screen w-full px-20">
        <div className="flex justify-between mt-10">
          <span className="text-white text-4xl">Purchases</span>
        </div>
        <div className="mt-10 overflow-y-scroll">
          <div class="grid grid-cols-3 gap-4">
            {Array(10)
              .fill(0)
              .map((el, index) => (
                <div
                  key={index}
                  className="rounded-md flex flex-col cursor-pointer"
                  onClick={() => history.replace(`/link/${el?.id || index}`)}
                >
                  <img src="/product_pic.svg" />
                  <span className="text-white mt-4">Name of the product</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row w-screen">
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <div className="flex flex-col basis-5/6">
        <Header />
        {showPurchases()}
      </div>
    </div>
  );
}
export default Purchases;
