import Link from "next/link";

import "../../dashboard-styles.css";

export default function SignInPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-md">Welcome to the admin panel for the ISEAP Store.</p>

      <div className="w-full mt-8">
        <form className="flex flex-col justify-start items-start w-full">
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
            Sign In
          </button>
        </form>

        <hr className="border-[1px] border-gray-200 my-6" />

        <p className="text-md">
          Don&apos;t have an account?{" "}
          <Link
            href="/admin/signup"
            className="text-blue-600 hover:opacity-80 transition-all"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
