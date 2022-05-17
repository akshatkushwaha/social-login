import React from "react";

function TwitterButton(props) {
  return (
    <button
      className="bg-white active:bg-gray-100 text-gray-800 px-2.5 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      <img
        alt="..."
        className="w-5"
        src={require("../assets/images/twitter.svg").default}
      />
    </button>
  );
}

export default TwitterButton;
