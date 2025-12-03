import { useContext } from "react";
import WebContext from "../context/WebContext";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

const LoginChecker = ({ children }) => {
  const { user, loader } = useContext(WebContext);
  const location = useLocation();

  // Show loader while checking auth state
  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 rounded-full border-2 border-green-500 border-b-transparent animate-spin"></div>
        <p className="ml-3 text-green-600 font-medium">
          Checking login status...
        </p>
      </div>
    );
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is logged in, render the protected content
  return children;
};

export default LoginChecker;

LoginChecker.propTypes = {
  children: PropTypes.node,
};
