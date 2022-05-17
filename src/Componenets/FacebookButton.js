import React from "react";

function FacebookButton() {
  return (
    <button
      className="fb-login-button bg-white active:bg-gray-100 text-gray-800 px-2 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
      data-size="large"
      data-layout="default"
      data-auto-logout-link="false"
      data-use-continue-as="false"
    >
      <img
        alt="..."
        className="w-6"
        src={require("../assets/images/facebook.svg").default}
      />
    </button>
  );
}

export default FacebookButton;
