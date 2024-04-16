import { Link } from "react-router-dom";

const Signin = () => {
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
        <label htmlFor="password" className="font-semibold my-1">
          password
        </label>
        <input
          type="password"
          id="password"
          className="bg-primary border-secondary rounded-lg border border-opacity-20 py-3 px-3 text-accent"
          placeholder="Enter your password"
        />
        <p className="text-accent font-thin font-openSans w-full text-right mb-2 text-xs mt-2">
          Forgot password?
        </p>
        <button
          type="button"
          className="bg-secondary text-[#242423] font-bold py-3 rounded-lg my-5"
        >
          Sign in
        </button>
        <hr className="border-secondary border-opacity-20" />
        <Link to="Signup" className="w-full">
          <button
            type="button"
            className="border-secondary rounded-lg border border-opacity-20 py-3 my-5 w-full"
          >
            Create an Account
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Signin;
