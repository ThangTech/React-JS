import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router";
import { getAccountApi } from "./services/api.service";
import { useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { useContext } from "react";

const App = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const res = await getAccountApi();
    if (res.data) {
      setUser(res.data.user);
    }
  };
  return (
    <>
      <Header />
      <Outlet /> //render component con theo route
      <Footer />
    </>
  );
};

export default App;
