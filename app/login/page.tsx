"use client";
import { signIn } from "next-auth/react";

// * Google login
const googleLogin = async () => {
  await signIn("google", {
    callbackUrl: "/profile",
    redirect: true,
  });
};
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Google Login Button */}
      <div className="space-y-3 mt-3">
        <button
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          onClick={googleLogin}
        >
          <span className="mr-2 inline-block"></span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
