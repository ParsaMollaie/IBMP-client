import BottomNav from "./BottomNav";
import Footer from "./Footer";
import Menubar from "./Menubar";
import NavBar from "./Navbar";
import { menuData } from "@/constants/menubar";

const WebLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pb-16 md:pb-0">
      <NavBar />
      <Menubar menuData={menuData} />

      {children}
      <Footer />
      <BottomNav />
    </div>
  );
};

export default WebLayout;
