import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center border-opacity-20 border rounded-lg border-secondary w-[488px] py-12 px-8">
      <img
        src="/public/images/Vector (1).png"
        alt="Warning Vector"
        className="object-cover mb-3"
      />
      <p className="text-secondary font-bold mb-2">Unverified email address</p>
      <span className="text-center text-accent font-openSans font-thin mb-2">
        In order to sign in, we have to verify your email first.We sent you an
        email verification after creating an account. Would you like to send
        another email verification?
      </span>
      <div className="flex flex-row w-full justify-center mt-4">
        <button className="bg-secondary py-3 mx-3 w-full rounded-lg text-primary font-bold">
          Yes
        </button>
        <button className="border-secondary border-opacity-20 rounded-lg border py-3 w-full text-secondary font-bold">
          No
        </button>
      </div>
    </div>
  );
};

export default Error;
