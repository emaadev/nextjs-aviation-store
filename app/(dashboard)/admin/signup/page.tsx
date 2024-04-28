import Link from "next/link";

import "../../dashboard-styles.css";

export default function SignUpPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <p className="text-md">Welcome to the admin panel for the ISEAP Store.</p>

      <div className="w-full mt-8">
        <form className="flex flex-col justify-start items-start w-full">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="login-input"
          />

          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="login-input"
          />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="login-input"
          />

          <button
            type="submit"
            className="rounded-md bg-blue-600 font-semibold px-4 py-2 text-white hover:opacity-80 transition-all"
          >
            Sign Up
          </button>
        </form>

        <hr className="border-[1px] border-gray-200 my-6" />

        <p className="text-md">
          Already have an account?{" "}
          <Link
            href="/admin/signin"
            className="text-blue-600 hover:opacity-80 transition-all"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
