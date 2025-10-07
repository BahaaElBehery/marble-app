import { Outlet } from "react-router";
import Header from "./HomePageComponents/Header";
import Footer from "./HomePageComponents/Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* هنا هتظهر الصفحات */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
