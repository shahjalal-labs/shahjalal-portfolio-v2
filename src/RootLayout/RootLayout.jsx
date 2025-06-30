import { Outlet } from "react-router";
import Navbar from "../module/Shared/Nav/Navbar";
import Footer from "../module/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
