import { Link } from "react-router";
import errorImage from "/error404.gif";

const RouteErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img className="max-w-lg w-full" src={errorImage} alt="error-gif" />
      <p className="text-xl font-semibold text-red-500">Page Not Found!</p>
      <Link
        className="py-1 px-6 rounded-lg bg-green-600 hover:bg-green-800 duration-300 transition font-medium text-white text-lg mt-2"
        to={"/"}
      >
        Go back!
      </Link>
    </div>
  );
};

export default RouteErrorPage;
