import { Navigation } from "../components/Navigation";
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <section className="flex">
      <div className="bg-primary flex-1 h-screen">
        <Navigation />
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;