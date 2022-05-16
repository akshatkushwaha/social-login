import React from "react";

function FacebookButton(props) {
  return (
    <button
      className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      <img
        alt="..."
        className="w-5 mr-1"
        src={require("../assets/facebook.svg").default}
      />
      Facebook
    </button>
  );
}

export default FacebookButton;
