
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import {Outlet} from "react-router";

const App = () => {
  return (
    <>
    <Header/>
      <Outlet/> //render component con theo route
    <Footer/>
    </>
  );
};

export default App;
