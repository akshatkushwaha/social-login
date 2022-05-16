import { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.HandleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleGoogleLogin = async () => {
    try {
      const response = await axios.get("/dashboard/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <section className="absolute w-full h-full bg-gray-150">
          <div className="container mx-auto py-10 px-10 h-full">
            <div className="flex content-center justify-center h-full">
              <h1 className="text-2xl">Profile Details</h1>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
