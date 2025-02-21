import React from "react";
import Title from "./Title";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="border border-gray-600 p-10 rounded-md w-full">
      <div>
        <Title> Oauth Login </Title>

        <button className="flex items-center border py-1 px-4 rounded-md hover:border-green-600 duration-200">
          Sign in with Google,Github or Facebook on Navbar
        </button>
      </div>

      {/* Credential Login */}
      <div className="mt-5">
        <Title>Credentials Login</Title>
        <form action="" className="flex flex-col gap-4">
          <div>
            <h1> Please login to continue </h1>
            <div className="max-w-lg mt-3">
              {/* Email Field */}
              <div className="flex flex-col">
                <label className="mb-3 mt-5 text-base font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label className="mb-3 mt-5 text-base font-medium text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Login Button */}
          <LoginButton />

          {/* Signup Link */}
          <Link href="/signup" className="text-sm text-gray-700 hover:text-gray-900">
            No Account yet? <span className="text-blue-600 font-medium">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

const LoginButton = () => {
  return (
    <button className="flex h-10 w-40 items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium rounded-md border border-green-600 px-4 py-2 text-sm transition duration-200 disabled:cursor-not-allowed disabled:opacity-50">
      Login
    </button>
  );
};

export default LoginForm;
