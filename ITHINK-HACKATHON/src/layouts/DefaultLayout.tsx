import { Outlet, Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <section id="default-layout">
      <div className="bg-primary font-openSans">
        <Link to="">        <h2 className="text-accent font-thin text-right px-7 py-4">
          Go back <i className="fa-solid fa-arrow-right text-accent"></i>
        </h2></Link>
        <div className="flex justify-center items-center h-screen y">
          <div className="mx-16">
            <h1 className="text-secondary text-[50px] font-bold">
              InsureChain
            </h1>
            <p className="text-accent font-thin font-openSans">
              Earn insurance coverage by completing challenges on blockchain.
            </p>
          </div>
          <div className="mx-16">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
