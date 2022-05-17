import React from "react";
import jsCookie from "js-cookie";

function GSIbutton(props) {
  const google = window.google;
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  function handleCredentialResponse(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    if (response == null) {
      alert("Can't Login");
    } else {
      const responsePayload = decodeJwtResponse(response.credential);
      props.handleLogin(responsePayload);
    }
  }

  function handleSignout() {
    jsCookie.remove("googleid");
    jsCookie.remove("name");
    jsCookie.remove("email");
    jsCookie.remove("picture");
    props.handleLogout();
  }

  function renderGoogleButton() {
    google.accounts.id.initialize({
      client_id:
        "605425009699-gmn5itshhf4alqphbn1c9vc40slqfsqs.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        type: "icon",
        theme: "outline",
        size: "large",
      } // customization attributes
    );

    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  if (props.loggedin === false) {
    renderGoogleButton();
    return <div id="buttonDiv" className="pr-2"></div>;
  } else {
    return (
      <>
        <form className="flex content-center justify-center py-4 px-4">
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={handleSignout}
            >
              Sign out
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default GSIbutton;
