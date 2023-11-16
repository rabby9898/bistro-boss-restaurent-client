import { Link } from "react-router-dom";
import img2 from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
const Login = () => {
  const { loginUSer } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUSer(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <div className="flex justify-between items-center gap-10">
        <div className="w-1/2">
          <img src={img2} alt="" />
        </div>
        <div className="w-1/2">
          <form onSubmit={handleLogIn} className="w-[80%]">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login</h1>
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
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Type Above Captcha"
                className="input input-bordered w-full "
                ref={captchaRef}
                name="captcha"
              />
              <button
                onClick={handleCaptcha}
                className="input input-bordered w-fit bg-[#61d154b2] text-white  mt-4"
              >
                Validate Captcha
              </button>
            </div>

            <div className="form-control w-full ">
              <input
                disabled={disabled}
                type="submit"
                placeholder="Type Password"
                className="input input-bordered w-full bg-[#D1A054B2] text-white uppercase mt-6"
                value="Submit"
              />
              <div>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-yellow-500 antialiased">
                  New user?{" "}
                  <Link className="font-bold text-yellow-500" to="/signUp">
                    Create your account
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

export default Login;
