import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <form className="flex flex-col gap-4 w-72">
        <input type="email" placeholder="Email" className="border px-4 py-2 rounded" />
        <input type="password" placeholder="Password" className="border px-4 py-2 rounded" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
