const Signup = () => {
  return (
    <form action="">
      <div className="border-secondary border rounded-lg text-accent p-[36px] font-openSans flex flex-col lg:min-w-[488px] w-full sm:min-w-[200px] h-full border-opacity-20">
        <label htmlFor="username" className="font-semibold my-1">
          username
        </label>
        <input
          type="text"
          id="username"
          className="bg-primary border-secondary rounded-lg border border-opacity-20 mb-4 px-3 py-3"
          placeholder="Enter your username"
        />
        <label htmlFor="email" className="font-semibold my-1">
          email
        </label>
        <input
          type="email"
          id="email"
          className="bg-primary border-secondary rounded-lg border border-opacity-20 mb-4 px-3 py-3"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="font-semibold my-1">
          password
        </label>
        <input
          type="password"
          id="password"
          className="bg-primary border-secondary rounded-lg border border-opacity-20 py-3 px-3 text-accent mb-3"
          placeholder="Enter your password"
        />
        <label htmlFor="password" className="font-semibold my-1">
          confirm password
        </label>
        <input
          type="password"
          id="password"
          className="bg-primary border-secondary rounded-lg border border-opacity-20 py-3 px-3 text-accent mb-3"
          placeholder="Enter your password"
        />
        <button
          type="button"
          className="bg-secondary text-[#242423] font-bold py-3 rounded-lg my-5"
        >
          Sign Up
        </button>
        <hr className="border-secondary border-opacity-20" />
        <p className="w-full font-openSans text-accent font-thin text-sm mt-6">
          By creating an account you agree to our{" "}
          <span className="text-secondary">Terms of Agreement</span> and{" "}
          <span className="text-secondary">Privacy Policy</span>.
        </p>
      </div>
    </form>
  );
};

export default Signup;
