import React, { useRef } from "react";
import { useState } from "react";

const Login = () => {
  const [isSignup, SetisSignup] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignup = () => {
    SetisSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-opacity-50">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="FliXGPT"
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isSignup
            ? "Sign in to your MovieGPT account"
            : "Create a new MovieGPT account"}
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            {!isSignup && (
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-8 text-gray-900"
                >
                  Enter Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  placeholder="Enter your Full Name"
                  required
                  class="p-4 my-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            )}
            <label
              for="email"
              class="block text-sm font-medium leading-8 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                ref={email}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Enter your email address"
                required
                class="p-4 my-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="text-sm">
                {isSignup && (
                  <a
                    href="#"
                    class="font-semibold text-red-700 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
            </div>
            <div class="mt-2">
              <input
                ref={password}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                placeholder="Enter your password"
                class="p-4 my-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg"
            >
              {isSignup ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        {isSignup ? (
          <p
            class="mt-10 text-center text-sm text-gray-500 cursor-pointer"
            onClick={toggleSignup}
          >
            Not a member? Sign up now
            {/* <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup now
            </a> */}
          </p>
        ) : (
          <p
            class="mt-10 text-center text-sm text-gray-500 cursor-pointer"
            onClick={toggleSignup}
          >
            Already a member? Login
            {/* <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a> */}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
