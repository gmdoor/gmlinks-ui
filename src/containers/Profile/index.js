import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Jazzicon from "react-jazzicon";

function Profile() {
  const [showEdit, setShowEdit] = useState(false);

  const showProfile = () => {
    return (
      <div className="flex flex-col bg-zinc-800 h-screen w-full px-20">
        <div className="flex justify-between mt-10">
          <span className="text-white text-4xl">Profile</span>
          <img
            onClick={() => setShowEdit(true)}
            src="/create_profile.svg"
            style={{ width: "150px", height: "35px" }}
          />
        </div>
        <div className="mt-10">
          <div className="flex flex-row">
            <Jazzicon
              diameter={100}
              seed={Math.round(Math.random() * 10000000)}
            />
            <div className="flex flex-col justify-end ml-3 text-white font-bold text-md">
              <span>Viraj Gorasia</span>
              <span>0xEEFea038B98F948FCFad0421836E3AeA25190501</span>
              <span>viraj.gorasia@gmlinks.com</span>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center bg-zinc-600 text-white text-lg h-1/2 rounded-lg flex flex-col items-center">
          <span className="mt-10">COMING SOON</span>
          <div className="mt-32 font-bold flex flex-col">
            <span>CREATE & SHARE YOUR OWN</span>
            <span>CRYPTO MARKETPLACE</span>
          </div>
        </div>
      </div>
    );
  };

  const createProfile = () => {
    return (
      <div className="flex flex-col bg-zinc-800 h-screen w-full px-20">
        <div className="flex justify-between mt-10">
          <span className="text-white text-4xl">Profile</span>
          <img
            onClick={() => setShowEdit(false)}
            src="/save_profile.svg"
            style={{ width: "150px", height: "35px" }}
          />
        </div>
        <div className="mt-10">
          <div className="flex flex-row">
            <Jazzicon
              diameter={100}
              seed={Math.round(Math.random() * 10000000)}
            />
            <div className="flex flex-col ml-3 text-white font-bold text-md">
              <label className="flex flex-row">
                Name:
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 rounded-md ml-5"
                />
              </label>
              <label className="flex flex-row pt-3">
                Wallet Address:
                <input
                  type="text"
                  name="address"
                  className="border border-gray-300 rounded-md ml-5"
                />
              </label>
              <label className="flex flex-row pt-3">
                Email:
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded-md ml-5"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center bg-zinc-600 text-white text-lg h-1/2 rounded-lg flex flex-col items-center">
          <span className="mt-10">COMING SOON</span>
          <div className="mt-32 font-bold flex flex-col">
            <span>CREATE & SHARE YOUR OWN</span>
            <span>CRYPTO MARKETPLACE</span>
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
        {showEdit ? createProfile() : showProfile()}
      </div>
    </div>
  );
}
export default Profile;
