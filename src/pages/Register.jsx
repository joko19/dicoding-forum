import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../states/users/action";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(asyncRegisterUser({ name, email, password }));
 
    navigate('/');
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="flex flex-col justify-center max-w-xl mx-auto pt-40">
        <h1 className="text-center font-bold text-3xl">Dicoding Forum</h1>
        <p className="text-center text-gray-500 dark:text-gray-300">
          Silahkan registrasi untuk melanjutkan
        </p>
        <div className="flex flex-col gap-2 mt-6">
          <input
            type="text"
            className="border p-2 rounded mx-auto w-96 focus:outline-none dark:bg-gray-600"
            placeholder="Nama"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="border p-2 rounded mx-auto w-96 focus:outline-none dark:bg-gray-600"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border p-2 rounded mx-auto w-96 focus:outline-none dark:bg-gray-600"
            placeholder="Password"
            required
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-4 bg-orange-500 w-96 text-white p-2 rounded mx-auto"
        >
          Register
        </button>
        <span className="mt-6 text-gray-500 dark:text-gray-300 text-center text-sm">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            Masuk
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
