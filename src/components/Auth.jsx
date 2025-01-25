import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { grid, profile, email_icon, lock_icon, cross_icon } from "../assets";
import { Heading } from "./elements/Heading";
import { Button } from "./elements/Button";
import { Tagline } from "./elements/Tagline";
import { toast } from "react-toastify";
import axios from "axios";

export const Auth = () => {
  const [authState, setAuthState] = useState("Sign In");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (authState === "Sign In") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onForgotPassword = () => {
    prompt("Enter email address: ");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-20">
      <form
        onSubmit={onSubmitHandler}
        className="relative h-full w-full md:h-auto md:w-auto py-16 px-24 rounded-xl text-slate-500 bg-n-8 flex flex-col justify-center"
      >
        <div className="absolute top-0 left-0 max-w-full z-0">
          <img
            src={grid}
            className="w-full"
            width={550}
            height={550}
            alt="Grid Background"
          />
        </div>

        <Heading
          title={authState}
          className="text-color-1 text-5xl mb-4 lg:mb-4"
        />
        <Tagline className="text-color-3 mb-10 mx-auto">
          {authState === "Sign In"
            ? "Welcome back! Sign in below"
            : "Hello! Get started below "}
        </Tagline>

        <div className="mt-4 flex flex-col z-1 h-[300px]">
          {authState !== "Sign In" && (
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 z-1">
              <img src={profile} alt="User Icon" className="mr-2 h-4" />
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none text-sm bg-transparent placeholder:text-n-1/50 placeholder:tagline"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 z-1">
            <img src={email_icon} alt="Email Icon" className="mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="outline-none text-sm bg-transparent placeholder:text-n-1/50 placeholder:tagline"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4 z-1">
            <img src={lock_icon} alt="Lock Icon" className="mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="outline-none text-sm bg-transparent placeholder:text-n-1/50 placeholder:tagline"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {authState === "Sign In" && (
            <p
              className="text-sm text-color-3 mt-4 cursor-pointer"
              onClick={onForgotPassword}
            >
              Forgot Password?
            </p>
          )}

          {authState === "Sign In" ? (
            <p className="mt-5">
              Don't have an account?{" "}
              <span
                className="text-color-1 cursor-pointer"
                onClick={() => setAuthState("Sign Up")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-5">
              Already have an account?{" "}
              <span
                className="text-color-1 cursor-pointer"
                onClick={() => setAuthState("Sign In")}
              >
                Sign In
              </span>
            </p>
          )}

          <Button className="w-3/5 mx-auto mt-12">{authState}</Button>
        </div>
        <img
          src={cross_icon}
          alt="Close Button Icon"
          className="absolute top-5 right-5 cursor-pointer max-md:top-24 max-sm:right-16"
          height={96}
          onClick={() => setShowLogin(false)}
        />
      </form>
    </div>
  );
};
