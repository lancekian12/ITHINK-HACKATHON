import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <section id="default-layout">
      <div className="flex justify-center items-center h-screen bg-primary">
        <div className="mx-16">
          <h1 className="text-secondary text-[50px] font-bold">InsureChain</h1>
          <p className="text-accent font-thin font-openSans">
          Earn insurance coverage by completing challenges on blockchain.
          </p>
        </div>
        <div className="mx-16">
          <Outlet/>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
