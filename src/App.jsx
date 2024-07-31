import { useEffect, useRef, useState } from "react";
import { NeatGradient } from "@firecms/neat";
import "./App.css";
import { useUser } from "./context/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const { login, register, loading } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState("login");

  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "login") {
      login(email, password);
    } else {
      register(email, password, name);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: "#fdf0ee",
          enabled: true,
        },
        {
          color: "#efb6b3",
          enabled: true,
        },
        {
          color: "#f9d9d7",
          enabled: true,
        },
        {
          color: "#f5c2c0",
          enabled: true,
        },
        {
          color: "#f8d4d2",
          enabled: true,
        },
      ],
      speed: 4,
      horizontalPressure: 3,
      verticalPressure: 3,
      waveFrequencyX: 2,
      waveFrequencyY: 2,
      waveAmplitude: 9,
      shadows: 0,
      highlights: 10,
      colorBrightness: 1,
      colorSaturation: -1,
      wireframe: true,
      colorBlending: 8,
      backgroundColor: "#FFFFFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return gradientRef.current.destroy;
  }, [canvasRef.current]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="z-10 w-[40%] h-[90vh]">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "login" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("login")}>
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "signup"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("signup")}>
            Sign Up
          </button>
        </div>

        <div className="z-10">
          <div className="transition-all duration-500">
            {activeTab === "login" && (
              <form onSubmit={handleSubmit}>
                <div className="p-4 bg-white rounded-lg shadow-lg ">
                  <h1 className="mb-1 text-2xl font-bold text-gray-800">
                    Hello Again!
                  </h1>
                  <p className="mb-8 text-sm font-normal text-gray-600">
                    Welcome Back
                  </p>
                  <div className="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <input
                      id="email"
                      className="w-full pl-2 border-none outline-none "
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center px-3 py-2 mb-12 border-2 rounded-2xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      className="w-full pl-2 border-none outline-none"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 flex items-center justify-center"
                  disabled={loading}>
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        className="mr-2 animate-spin"
                      />
                      <span className="ml-2">Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="flex justify-between mt-4">
                  <span className="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
                    Forgot Password ?
                  </span>
                </div>
              </form>
            )}
            {activeTab === "signup" && (
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="p-4 bg-white rounded-lg shadow-lg ">
                    <h1 className="mb-1 text-2xl font-bold text-gray-800">
                      Hello Again!
                    </h1>
                    <p className="mb-8 text-sm font-normal text-gray-600">
                      Welcome Back
                    </p>
                    <div className="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        id="name"
                        className="w-full pl-2 bg-transparent border-none outline-none"
                        type="name"
                        name="name"
                        placeholder="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center px-3 py-2 mb-8 border-2 rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                      <input
                        id="email"
                        className="w-full pl-2 bg-transparent border-none outline-none"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center px-3 py-2 mb-12 border-2 rounded-2xl ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <input
                        className="w-full pl-2 text-black bg-transparent border-none outline-none"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="block w-full py-2 mt-5 mb-2 font-semibold text-white transition-all duration-500 bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 flex items-center justify-center"
                    disabled={loading}>
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spin
                          className="mr-2 animate-spin"
                        />
                        <span className="ml-2">Loading..</span>
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                  <div className="flex justify-between mt-4">
                    <span className="ml-2 text-sm transition-all duration-500 cursor-pointer hover:text-blue-500 hover:-translate-y-1">
                      Forgot Password ?
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
