import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router";
import { getAccountApi } from "./services/api.service";
import { useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { useContext } from "react";
import { Spin } from "antd";

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
  const fetchUserInfo = async () => {
    const res = await getAccountApi();
    await delay(1000);
    if (res.data) {
      setUser(res.data.user);
    }
    setIsAppLoading(false);
  };
  return (
    <>
      {isAppLoading === true ? (
        <>
          <Spin style={{position: "absolute", top: "50%", left: "50%", transform: " translate(-50%, -50%)"}} description="Loading..." size="large" />
        </>
      ) : (
        <>
          <Header />
          <Outlet /> //render component con theo route
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
