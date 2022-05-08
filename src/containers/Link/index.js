import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useQuery } from "../../hooks/useQuery";

function Link() {
  const [showOpenLink, setShowOpenLink] = useState(false);
  const query = useQuery();

  const showPurchaseLink = () => {
    return (
      <div className="flex flex-col items-center bg-zinc-800 h-screen w-full px-20">
        <div className="w-1/2 bg-zinc-700 rounded-md flex flex-col mt-20 px-5 py-5">
          <img src="/product_pic.svg" />
          <span className="text-white text-2xl font-semibold mt-5">
            Name of the product
          </span>
          <span className="text-white text-md mt-5">
            Description of the product Description of the product Description of
            the product Description of the product Description of the product
            Description of the product Description of the product Description of
            the product Description of the product Description of the product
          </span>
          <div className="flex mt-5">
            <img src="/polygon.svg" />
            <span className="text-white text-lg ml-3">56</span>
          </div>
          <div className="flex justify-center cursor-pointer">
            <img
              src="/buy_now.svg"
              className="mt-5"
              onClick={() => setShowOpenLink(true)}
            />
          </div>
        </div>
      </div>
    );
  };

  const showLink = () => {
    console.log(query.get("from"));
    return (
      <div className="flex flex-col items-center bg-zinc-800 h-screen w-full px-20">
        <div className="w-1/2 bg-zinc-700 rounded-md flex flex-col mt-20 px-5 py-5">
          {query.get("from") ? (
            <>
              <img src="/purchase_success.png" />
              <span className="text-white text-2xl font-semibold mt-5">
                Purchase Successful
              </span>
            </>
          ) : (
            <>
              <img src="/product_pic.svg" />
              <span className="text-white text-2xl font-semibold mt-5">
                Name of the product
              </span>
              <span className="text-white text-md mt-5">
                Description of the product Description of the product
                Description of the product Description of the product
                Description of the product Description of the product
                Description of the product Description of the product
                Description of the product Description of the product
              </span>
            </>
          )}
          <div className="flex justify-center cursor-pointer">
            <img
              src="/open_link.svg"
              className="mt-5"
              onClick={() => setShowOpenLink(false)}
            />
          </div>
          {query.get("from") ? (
            <span className="text-white mt-10 text-center">
              Join GMLinks to view all of your purchases
            </span>
          ) : null}
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
        {showOpenLink ? showLink() : showPurchaseLink()}
      </div>
    </div>
  );
}
export default Link;
