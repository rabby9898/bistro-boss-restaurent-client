import { Link, useNavigate } from "react-router-dom";
import img2 from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(data.displayName, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to database");
                navigate("/");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  return (
    <div
      //   style={{
      //     backgroundImage: `url("${img1}")`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
      className="h-max mt-20"
    >
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="flex justify-between items-center flex-row-reverse gap-10">
        <div className="w-1/2">
          <img src={img2} alt="" />
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[80%]">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <p className="label-text text-base font-semibold">Name</p>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <p className="label-text text-base font-semibold">PhotoURL</p>
              </label>
              <input
                type="text"
                placeholder="Your PhotoURL"
                className="input input-bordered w-full "
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-red-600">
                  Photo URL field is required
                </span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <p className="label-text text-base font-semibold">Email</p>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <p className="label-text text-base font-semibold">Password</p>
              </label>
              <input
                type="password"
                placeholder="Type Password"
                className="input input-bordered w-full "
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&])/,
                })}
              />
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-600">
                  Password should min 6 characters.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert" className="text-red-600">
                  Password should max 20 characters.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="alert" className="text-red-600">
                  at least one uppercase letter, one lowercase letter, one
                  number and one special character:
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <input
                type="submit"
                placeholder="Type Password"
                className="input input-bordered w-full bg-[#D1A054B2] text-white uppercase mt-6"
                value="Submit"
              />
              <div>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-yellow-500 antialiased">
                  Already registered?{" "}
                  <Link className="font-bold text-yellow-500" to="/login">
                    Go to login page
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
