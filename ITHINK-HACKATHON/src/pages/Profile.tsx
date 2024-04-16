const Profile = () => {
  return (
    <div className="py-8 px-12">
      <h2 className="text-secondary text-3xl font-bold mb-2">Profile</h2>
      <p className="text-accent">you can see a lot about yourself here too</p>
      <div className="grid grid-rows-9 grid-cols-10 h-screen mt-9">
        <div className="component-grid border-opacity-20 border-secondary row-start-1 row-end-11 col-start-1 col-end-5 px-8">
          <img
            src="/public/images/Vector (3).png"
            alt="picture"
            className="w-[250px] h-[250px] mb-10"
          />
          <div className="flex flex-row justify-between items-center text-accent w-full">
            <h3>username</h3>
            <h3>lancekian12</h3>
          </div>
          <hr className="w-full border-secondary mt-5 mb-9 border-opacity-20" />
          <div className="flex flex-row justify-between items-center text-accent w-full">
            <h3>email</h3>
            <h3>lancekian12@gmail.com</h3>
          </div>
          <hr className="w-full border-secondary mt-5 mb-9 border-opacity-20" />
          <div className="flex flex-row justify-between items-center text-accent w-full">
            <h3>challenges completed</h3>
            <h3>150</h3>
          </div>
          <hr className="w-full border-secondary mt-5 mb-9  border-opacity-20" />
          <div className="flex flex-row justify-between items-center text-accent w-full">
            <h3>total points</h3>
            <h3>5038</h3>
          </div>
          <hr className="w-full border-secondary mt-5 mb-9  border-opacity-20" />
          <button className="text-accent rounded-xl border border-secondary px-6 py-5 border-opacity-30">Change Password</button>
        </div>
        <div className="component-grid border-opacity-20 border-secondary row-start-1 row-end-3 col-start-5 col-end-8"></div>
        <div className="component-grid border-opacity-20 border-secondary row-start-3 row-end-5 col-start-5 col-end-8"></div>
        <div className="component-grid border-opacity-20 border-secondary row-start-5 row-end-11 col-start-5 col-end-8"></div>
        <div className="component-grid border-opacity-20 border-secondary row-start-1 row-end-4 col-start-8 col-end-11"></div>
        <div className="component-grid border-opacity-20 border-secondary row-start-4 row-end-7 col-start-8 col-end-11"></div>
        <div className="component-grid border-opacity-20 border-secondary row-start-7 row-end-11 col-start-8 col-end-11"></div>
      </div>
    </div>
  );
};

export default Profile;
