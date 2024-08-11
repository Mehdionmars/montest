"use client";

import React from "react";
import SigninForm from "@/app/(components)/Auth/SigninForm";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-6">
          Sign In
        </h1>
        <SigninForm />
      </div>
    </div>
  );
};

export default SigninPage;
