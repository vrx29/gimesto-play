import axios from "axios";
import { useReducer } from "react";
import { formReducer } from "reducers/reducerFunctions";
import { initialFormState } from "reducers/states";
import { useAuth } from "context";
import { validateEmail } from "utils/generalUtils";

export const useAuthHandler = () => {
  const { setUserAuthState } = useAuth();
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const { firstName, lastName, email, password, confirmPassword } = formState;

  const setUpTestLogin = (e) => {
    e.preventDefault();
    formDispatch({
      type: "SET_FORM_DATA",
      payload: { email: "vineet@gmail.com", password: "vineet123" },
    });
  };

  const setError = (msg) => {
    formDispatch({
      type: "SET_FORM_ERROR",
      payload: msg,
    });

    setTimeout(() => {
      formDispatch({
        type: "SET_FORM_SUCCESS",
      });
    }, 2000);
  };

  const setCookie = (token, userName) => {
    document.cookie = `isLoggedIn=true`;
    document.cookie = `authToken=${encodeURIComponent(token)}`;
    document.cookie = `user=${encodeURIComponent(userName)}`;
    setUserAuthState({
      isLoggedIn: true,
      authToken: token,
      user: userName,
    });
  };

  const getCookie = () => {
    const authCookie = document.cookie;
    if (!authCookie) {
      return null;
    }
    const arrayFromCookie = authCookie.split("; ").map((row) => row.split("="));
    const { isLoggedIn, authToken, user } = Object.fromEntries(arrayFromCookie);

    return {
      isLoggedIn,
      authToken,
      user,
    };
  };

  const deleteCookie = () => {
    document.cookie = "isLoggedIn=;max-age=0";
    document.cookie = "authToken=;max-age=0";
    document.cookie = "user=;max-age=0";

    setUserAuthState({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    formDispatch({
      type: "SET_FORM_DATA",
      payload: { [name]: value },
    });
  };

  const getAuthFromServer = async (api, data, userType) => {
    try {
      formDispatch({ type: "SET_LOADING" });
      const res = await axios.post(api, { ...data });

      if (res.status === 200 || res.status === 201) {
        formDispatch({
          type: "SUBMIT_SUCCESS",
        });

        setCookie(res.data.encodedToken, res.data[userType].firstName);
      }
    } catch (error) {
      setError("Something went wrong while connecting to server");
    }
  };

  const handleLogout = () => {
    deleteCookie();
  };

  const handleLoginFormSubmit = () => {
    if ([email, password].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else {
      getAuthFromServer(
        "/api/auth/login",
        {
          email,
          password,
        },
        "foundUser"
      );
    }
  };

  const handleSignUpFormSubmit = () => {
    if ([firstName, lastName, email, password, confirmPassword].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else if (password !== confirmPassword) {
      setError("Confirm Password must be same as Password");
    } else {
      formDispatch({
        type: "SET_FORM_SUCCESS",
      });
      getAuthFromServer(
        "/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        "createdUser"
      );
    }
  };

  return {
    formState,
    handleInputChange,
    handleSignUpFormSubmit,
    getCookie,
    handleLoginFormSubmit,
    handleLogout,
    setUpTestLogin,
  };
};
