import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

export const Login = () => {
  const { user, signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    user && navigate("/");
  }, []);

  const onSubmit = (data) => {
    signIn(data.email, data.pass)
      .then(() => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Successfully login",
          timer: 2000,
        });
      })
      .catch((er) => {
        Swal.fire({
          icon: "error",
          title: `${er}`,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Successfully login",
          timer: 2000,
        });
      })
      .catch((er) => {
        Swal.fire({
          icon: "error",
          title: `${er}`,
        });
      });
  };
  return (
    <div>
      <section className="">
        <div className="  bg-cover bg-no-repeat container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full m-5 max-w-md bg-[#b6b5b52f] rounded-lg backdrop-blur-lg px-8 py-5">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <h1 className="mt-3 text-2xl  font-semibold text-center capitalize sm:text-3xl">
                sign In
              </h1>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 mt-1 ml-1">
                  This field is required
                </span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  {...register("pass", { required: true })}
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.pass && (
                <span className="text-red-500 mt-1 ml-1">
                  This field is required
                </span>
              )}

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>
            </form>{" "}
            <p className="mt-4 text-center ">or sign in with</p>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center w-full justify-center px-6 py-3 mt-4 text-white transition-colors duration-300 transform border rounded-lg hover:text-black hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span className="mx-2 text-black">SignIn with Google</span>
            </button>
            <div className="mt-6 text-center ">
              <Link to="/reg" className="text-sm text-blue-500 hover:underline">
                Don’t have an account yet? Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
