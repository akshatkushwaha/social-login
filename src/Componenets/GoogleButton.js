import React, { Component } from "react";

class GoogleButton extends Component {
  render() {
    return (
      <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fdashboard%2F&prompt=consent&response_type=code&client_id=605425009699-a08v212752nbljkldsado1odec6d8nfk.apps.googleusercontent.com&scope=Profile&access_type=offline">
        <button
          className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          <img
            alt="..."
            className="w-5 mr-1"
            src={require("../assets/google.svg").default}
          />
          Google
        </button>
      </a>
    );
  }
}

export default GoogleButton;
