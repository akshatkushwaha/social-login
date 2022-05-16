import React from "react";
import jwt_decode from "jwt-decode";

function getData() {
  var url = window.location;
  var JWT_token = url.search.substring(1);
  return jwt_decode(JWT_token);
}

function Dashboard() {
  const data = getData();
  return (
    <>
      <section className="absolute w-full h-full bg-gray-150">
        <div className="container mx-auto py-10 px-10 h-full">
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
        </div>
      </section>
    </>
  );
}

export default Dashboard;
