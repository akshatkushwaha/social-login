import axios from "axios";

async function getData() {
  try {
    var url = window.location;
    var access_token = url.hash.substring(1);
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?${access_token}`
    );
    // await axios.post("/api/googleauth", response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function Dashboard() {
  getData().then((response) => console.log(response));
  return (
    <>
      <section className="absolute w-full h-full bg-gray-150">
        <div className="container mx-auto py-10 px-10 h-full">
          <div className="flex content-center justify-center h-full">
            <h1 className="text-2xl">Profile Details</h1>
            {/* <h1>Name : {data}</h1> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
