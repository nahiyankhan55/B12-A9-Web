import { useEffect, useState } from "react";
import WebContext from "./WebContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const WebContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  // User Info
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // Handle Registration
  const handleRegisterEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Handle Login
  const handleLoginEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Handle Google Provider
  const handleGoogle = () => {
    setLoader(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName);
        setImage(currentUser.photoURL);
      } else {
        setUser(null);
        setName("");
        setImage("");
      }
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Handle Logout
  const handleLogout = () => {
    setLoader(true);
    return signOut(auth)
      .then(() => {
        toast.info(`Logout Successful`, {
          position: "top-center",
          autoClose: 2000,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const contextNames = {
    loader,
    setLoader,
    handleLogout,
    handleGoogle,
    handleRegisterEmail,
    handleLoginEmail,
    user,
    setUser,
    name,
    setName,
    image,
    setImage,
  };

  return (
    <WebContext.Provider value={contextNames}>{children}</WebContext.Provider>
  );
};

export default WebContextProvider;

WebContextProvider.propTypes = {
  children: PropTypes.node,
};
