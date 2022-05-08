import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Products() {
  const [createLink, setCreateLink] = useState(false);

  const showDashboard = () => {
    return (
      <div className="flex flex-col bg-zinc-800 h-screen w-full px-20">
        <div className="flex justify-between mt-10">
          <span className="text-white text-4xl">Links</span>
          <img
            onClick={() => setCreateLink(true)}
            src="create-link.svg"
            style={{ width: "150px", height: "35px" }}
          />
        </div>
        <div className=" flex flex-col mt-20">
          <span className="text-white">Last 30 days</span>
          <div className="flex flex-row mt-6">
            <div className="flex flex-col basis-1/3 border-r border-black rounded-l-lg bg-white p-5">
              <span>Total Sale (in matic)</span>
              <span className="text-4xl mt-2">71,898</span>
            </div>
            <div className="flex flex-col basis-1/3 border-r border-black bg-white p-5">
              <span>Total Customers</span>
              <span className="text-4xl mt-2">56030</span>
            </div>
            <div className="flex flex-col basis-1/3 rounded-r-lg bg-white p-5">
              <span>Live Projects</span>
              <span className="text-4xl mt-2">567</span>
            </div>
          </div>
        </div>
        <table class="table-fixed mt-10 bg-white rounded-lg text-gray-500 text-sm text-center">
          <thead className="border-b border-gray-300">
            <tr>
              <th className="py-3">PROJECTS</th>
              <th className="py-3">SOLD</th>
              <th className="py-3">PRICE</th>
              <th className="py-3">SALES</th>
              <th className="py-3">LINK</th>
              <th className="py-3">OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-3">Untitled</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="flex justify-center py-3">
                <img src="/copy_icon.svg" />
              </td>
              <td>
                <td className="flex justify-center py-3">
                  <img src="/menu_icon.svg" />
                </td>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-3">Untitled</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="flex justify-center py-3">
                <img src="/copy_icon.svg" />
              </td>
              <td>
                <td className="flex justify-center py-3">
                  <img src="/menu_icon.svg" />
                </td>
              </td>
            </tr>
            <tr className="border-gray-300">
              <td className="py-3">Untitled</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="py-3">-</td>
              <td className="flex justify-center py-3">
                <img src="/copy_icon.svg" />
              </td>
              <td>
                <td className="flex justify-center py-3">
                  <img src="/menu_icon.svg" />
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const createGmLink = () => {
    return (
      <div className="flex flex-col bg-zinc-800 h-screen w-full px-20">
        <div className="flex justify-between mt-10">
          <span className="text-white text-4xl">Let's create</span>
          <div className="flex justify-center">
            <img
              onClick={() => setCreateLink(false)}
              src="/publish_icon.svg"
              style={{ width: "150px", height: "35px", marginRight: "-50px" }}
            />
            <img
              onClick={() => setCreateLink(false)}
              src="/cancel_icon.svg"
              style={{ width: "150px", height: "35px" }}
            />
          </div>
        </div>
        <div className="flex flex-col bg-white mx-20 mt-10 rounded-lg p-5">
          <span className="text-lg font-bold">Create your link</span>
          <label className="flex flex-col pt-5">
            Product Name:
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-md"
            />
          </label>
          <label className="flex flex-col pt-5">
            Product Description:
            <textarea
              name="description"
              className="border border-gray-300 rounded-md"
            />
          </label>
          <label className="flex flex-col pt-5">
            Product URL:
            <input
              type="url"
              name="url"
              className="border border-gray-300 rounded-md"
            />
          </label>
          <label className="flex flex-col pt-5">
            Price:
            <input
              type="number"
              name="price"
              className="border border-gray-300 rounded-md w-1/4"
            />
          </label>
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
        {createLink ? createGmLink() : showDashboard()}
      </div>
    </div>
  );
}
export default Products;
