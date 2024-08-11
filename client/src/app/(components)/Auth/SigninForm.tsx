"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LoginData {
  email: string;
  password: string;
}

const SigninForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({ email: "", password: "" });
  const [remember, setRemember] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={remember}
          onChange={() => setRemember(!remember)}
          className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
        <label className="text-sm text-gray-600 dark:text-gray-400">Remember me</label>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        Sign In
      </button>
      <div className="mt-4 text-center">
        <Link href="/auth/signup" className="text-blue-600 hover:underline dark:text-blue-400">
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
