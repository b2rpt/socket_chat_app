import { Outlet } from "react-router-dom";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main  style={{ flexGrow:1 }}>
      <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
