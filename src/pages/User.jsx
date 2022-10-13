import Header from "../components/Header";
import Footer from "../components/Footer";
import MainUser from "../components/User/MainUser";
import userProfile from "../services/userProfile";
import { useState, useEffect } from "react";

function User() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await userProfile(token);
      setData(result);
    };
    getData();
  }, [token]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <Header />
      <MainUser dataUserInfo={data.body} />
      <Footer />
    </div>
  );
}

export default User;
