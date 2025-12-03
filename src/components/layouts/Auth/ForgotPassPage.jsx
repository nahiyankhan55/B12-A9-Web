import { Button, TextField } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.config";

const ForgotPassPage = () => {
  const navigate = useNavigate();

  // send reset link
  const handleForgotPass = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  // form submit functionality
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;

    if (!email) {
      toast.info("Please enter your registered email.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      await handleForgotPass(email);
      toast.success("Password reset email sent! Please check your inbox.", {
        position: "top-right",
        autoClose: 2500,
      });
      target.reset();
      navigate("/login");
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center sm:gap-5 gap-2 px-5 pb-8">
      <div className="flex flex-col gap-1 items-center md:mt-8 mt-4">
        <h3 className="md:text-4xl sm:text-3xl text-2xl font-semibold">
          Forgot Password
        </h3>
        <p className="text-base text-amber-600 font-medium">
          Enter your registered email to reset your password.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:w-2/5 md:w-6/12 sm:w-8/12 w-full">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-4 mt-4 w-full"
        >
          <TextField
            name="email"
            className="w-full bg-white"
            type="email"
            label="Email"
            variant="filled"
            autoComplete="email"
            required
          ></TextField>

          <div className="w-full flex flex-col items-center">
            <Button
              type="submit"
              className="w-full md:max-w-2/3 mx-auto py-2 b rounded-md border-2 shadow-gray-400/90 hover:shadow-md transition-all duration-300 bg-blue-600! text-white!"
            >
              <p className="text-lg font-semibold py-1">Send Reset Link</p>
            </Button>
          </div>
        </form>

        <p className="font-medium text-lg flex items-center gap-1 justify-center">
          Remember your password?
          <Link
            className="text-cyan-600 hover:text-cyan-800 duration-300 font-bold"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassPage;
