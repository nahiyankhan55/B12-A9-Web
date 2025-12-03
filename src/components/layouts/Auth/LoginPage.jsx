import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import WebContext from "../../../context/WebContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { handleLoginEmail, handleGoogle, setUser } = useContext(WebContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // google registration
  const handleGoogleMethod = async () => {
    try {
      const result = await handleGoogle();
      setUser(result.user);

      toast.success(`Login Successful`, {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      toast.error(`Google Registration Error: ${error.message}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // form submit functionality
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;

    handleLoginEmail(email, password)
      .then(async (userCredential) => {
        setUser(userCredential.user);
        toast.success("Login Successful.", {
          position: "top-right",
          autoClose: 2000,
        });
        target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Login Error: ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="w-full flex flex-col items-center sm:gap-5 gap-2 px-5 pb-8">
      <div className="flex flex-col gap-1 items-center md:mt-8 mt-4">
        <h3 className="md:text-4xl sm:text-3xl text-2xl font-semibold">
          Login
        </h3>
        <p className="text-base font-medium text-green-500">
          Login to access plant details.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:w-2/5 md:w-6/12 sm:w-8/12 w-full">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-4 mt-4 w-full"
        >
          <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
            <TextField
              name="email"
              className="w-full bg-white"
              type="email"
              label="Email"
              variant="filled"
              autoComplete="username"
              required
            ></TextField>
          </div>

          <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
            <div className="w-full relative">
              <TextField
                name="password"
                className="w-full bg-white"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                autoComplete="password"
                required
              ></TextField>
              {!showPassword ? (
                <MdVisibilityOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
                ></MdVisibilityOff>
              ) : (
                <MdVisibility
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
                ></MdVisibility>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <Button
              type="submit"
              className="w-full mx-auto py-2 rounded-md border-2 text-white! shadow-gray-400/90 bg-linear-to-tr! from-purple-500 to-teal-500 hover:to-cyan-600 hover:shadow-md transition-all duration-300"
            >
              <p className="text-lg font-semibold py-1">Login</p>
            </Button>
          </div>
        </form>

        <p className="text-xl font-bold text-center">or</p>
        <button
          onClick={handleGoogleMethod}
          className="w-full md:w-1/2 bg-white rounded-md text-xl mx-auto border-2 border-purple-500 font-semibold transition hover:shadow-md hover:scale-105 shadow-gray-400/90 hover:border-cyan-600 py-2 flex items-center justify-center gap-2 text-black cursor-pointer"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          Google
        </button>

        <p className="font-medium text-lg flex items-center gap-1">
          New User?
          <Link
            className="text-cyan-600 hover:text-cyan-800 duration-300 font-bold"
            to={"/register"}
          >
            Register
          </Link>
        </p>
        <Link
          className="text-blue-600 hover:text-purple-700 duration-300 font-bold"
          to={"/forgot"}
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
