import React, { useState } from "react";
import FacebookButton from "../Componenets/FacebookButton";
import GSIbutton from "../Componenets/GSIbutton";
import TwitterButton from "../Componenets/TwitterButton";
import { sha512 } from "crypto-hash";
import jsCookie from "js-cookie";

export default function SigninPage() {
  const [loggedin, setLoginStatus] = useState(false);
  const [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [rememberMe, setRemember] = useState(false);

  if (jsCookie.get("googleid") !== undefined) {
    if (data.sub !== jsCookie.get("googleid")) {
      setData({
        name: jsCookie.get("name"),
        email: jsCookie.get("email"),
        sub: jsCookie.get("googleid"),
        picture: jsCookie.get("picture"),
      });
      setLoginStatus(true);
    }
  }

  async function handleSignin() {
    password = await sha512(password);
    console.log(email, password, rememberMe);
  }

  function handleLogin(responseData) {
    jsCookie.set("googleid", responseData.sub, { expires: 59 });
    jsCookie.set("name", responseData.name, { expires: 59 });
    jsCookie.set("email", responseData.email, { expires: 59 });
    jsCookie.set("picture", responseData.picture, { expires: 59 });
    setData(responseData);
    setLoginStatus(true);
  }

  function handleLogout() {
    setLoginStatus(false);
  }

  if (loggedin === false) {
    return (
      <>
        <section className="absolute w-full h-full bg-gray-900">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-2/3 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center flex justify-center">
                      <GSIbutton
                        handleLogin={handleLogin}
                        loggedin={loggedin}
                      />
                      <FacebookButton />
                      <TwitterButton />
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                            checked={rememberMe}
                            onChange={(e) => setRemember(!rememberMe)}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={handleSignin}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="absolute w-full h-full bg-gray-150">
          <div className="container mx-auto py-10 px-10">
            <div className="flex content-center justify-center">
              <h1 className="text-2xl">Profile Details</h1>
            </div>
            <div className="flex content-center justify-center py-4 px-4">
              <h1>Name : {data.name}</h1>
            </div>
            <div className="flex content-center justify-center py-4 px-4">
              <h3>Google ID : {data.sub}</h3>
            </div>
            <div className="flex content-center justify-center py-4 px-4">
              <h3>Email : {data.email}</h3>
            </div>
            <div className="flex content-center justify-center py-4 px-4">
              <img src={data.picture} alt={`${data.picture}`} />
            </div>
            <GSIbutton handleLogout={handleLogout} loggedin={loggedin} />
          </div>
        </section>
      </>
    );
  }
}
