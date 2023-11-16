import { Link } from "react-router-dom";
import img2 from "../../assets/others/authentication1.png";
const SignUp = () => {
  return (
    <div
      //   style={{
      //     backgroundImage: `url("${img1}")`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
      className="h-max"
    >
      <div className="flex justify-between items-center flex-row-reverse gap-10">
        <div className="w-1/2">
          <img src={img2} alt="" />
        </div>
        <div className="w-1/2">
          <form className="w-[80%]">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <p className="label-text text-base font-semibold">Name</p>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full "
                name="name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <p className="label-text text-base font-semibold">Email</p>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full "
                name="email"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <p className="label-text text-base font-semibold">Password</p>
              </label>
              <input
                type="text"
                placeholder="Type Password"
                className="input input-bordered w-full "
                name="password"
              />
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
