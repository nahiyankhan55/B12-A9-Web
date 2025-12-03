import { useContext, useState } from "react";
import WebContext from "../../../context/WebContext";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { toast } from "react-toastify";

const MyProfilePage = () => {
  const { name, setName, image, setImage, user } = useContext(WebContext);
  const [isNameSubmitting, setIsNameSubmitting] = useState(false);
  const [isImageSubmitting, setIsImageSubmitting] = useState(false);

  const updateName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setIsNameSubmitting(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        toast.success(`Name updated.`, {
          position: "top-center",
          autoClose: 2000,
        });
        setName(name);
        setIsNameSubmitting(false);
      })
      .catch((error) => {
        toast.error(`Name update failed: ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
        setIsNameSubmitting(false);
      });
  };
  const updateImage = (e) => {
    e.preventDefault();
    const imageURL = e.target.imageURL.value;
    setIsImageSubmitting(true);
    updateProfile(auth.currentUser, {
      photoURL: imageURL,
    })
      .then(() => {
        toast.success(`Photo updated.`, {
          position: "top-center",
          autoClose: 2000,
        });
        setImage(imageURL);
        setIsImageSubmitting(false);
      })
      .catch((error) => {
        toast.error(`Photo update failed: ${error.message}`, {
          position: "top-right",
          autoClose: 2000,
        });
        setIsImageSubmitting(false);
      });
  };

  return (
    <div className="w-full flex flex-col gap-5 items-center mt-5 sm:mt-10">
      <div className="md:px-10 sm:px-5 px-2 w-full max-w-lg">
        <div className="py-10 bg-white flex flex-col items-center gap-3 px-5 text-center rounded-xl shadow-lg shadow-gray-500 border-b-2 border-green-600">
          <img
            className="md:w-40 sm:w-36 w-28 md:h-40 sm:h-36 h-28 rounded-full object-cove bg-gray-300 shadow-md shadow-gray-400"
            src={image}
            alt={name || "Photo"}
          />
          <h2 className="font-bold md:text-3xl sm:text-2xl text-lg">
            {name || "Name"}
          </h2>
          <p className="md:text-xl sm:text-xl text-sm font-medium">
            {user?.email}
          </p>
        </div>
      </div>

      <div className="mt-10 mb-20 py-10 bg-cover lg:w-1/3 md:w-2/4 sm:w-3/5 bg-center w-full rounded-lg flex flex-col gap-6 px-5 mx-auto">
        <form
          onSubmit={updateName}
          className="w-full mx-auto flex flex-col gap-2 items-start"
        >
          <input
            required
            name="name"
            type="text"
            placeholder="New Name"
            defaultValue={name}
            className="text-lg font-medium py-3 px-2 w-full rounded-md shadow-md shadow-gray-400 bg-white"
          />
          <button className="mt-1 text-lg font-semibold text-center px-10 rounded-md text-white py-2 hover:bg-emerald-700 duration-300 bg-emerald-600 shadow-md shadow-gray-400 border-b-4 border-r-4 border-emerald-700">
            {isNameSubmitting ? "Updating..." : "Update Name"}
          </button>
        </form>
        <form
          onSubmit={updateImage}
          className="w-full mx-auto flex flex-col gap-2 items-start"
        >
          <input
            required
            name="imageURL"
            type="text"
            placeholder="New Photo URL"
            className="placeholder:text-lg placeholder:font-medium py-3 px-2 w-full rounded-md shadow-md shadow-gray-400 bg-white"
          />
          <button className="mt-1 text-lg font-semibold text-center px-10 rounded-md text-white py-2 hover:bg-emerald-700 duration-300 bg-emerald-600 shadow-md shadow-gray-400 border-b-4 border-r-4 border-emerald-700">
            {isImageSubmitting ? "Updating..." : "Update Photo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfilePage;
