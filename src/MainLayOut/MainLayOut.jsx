import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayOut = () => {
  const location = useLocation();
  console.log(location);
  const noNavFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noNavFooter || <Navbar></Navbar>}

      <Outlet></Outlet>
      {noNavFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayOut;
