const DefaultLayout = () => {
  return (
    <section id="default-layout">
      <div className="bg-[#1E2124] h-screen">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-secondary text-[50px]">Finia</h1>
            <p className="text-accent">
              A financial management to track your income and expenses.{" "}
            </p>
          </div>
          <div>
            <form action=""></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
