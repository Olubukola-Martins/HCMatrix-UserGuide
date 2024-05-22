import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../../../components/admin";
import { useEffect, useState } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../state/admin/authenticationSlice";
import { FaSpinner } from "react-icons/fa";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import Auth from "../../../pages/auth/Auth";

const VerifyPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    confirmPassword: "",
    password: "",
  });
  const { password, confirmPassword } = credentials;
  const { loginMessage, user, token, loading, error } = useSelector(
    (store) => store.auth
  );

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!confirmPassword || !password) {
      toast.error("Please enter password");
      return;
    }

    if (confirmPassword !== password) {
      toast.error("Password do not match");
      return;
    }

    dispatch(loginUser(credentials)).then((result) => {
      if (result.payload) {
        setCredentials({ email: "", password: "" });
      }
    });
  };

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  return (
    <Auth>
      <div className="relative w-[40%]">
        <div className="text-center text-[#3A3A3AB2] mb-10">
          <h3 className=" font-semibold text-xl mb-2">
            Enter You new Password
          </h3>
        </div>
        <form className="  relative w-full" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-10">
            <FloatingInput
              type="password"
              placeHolder="Enter New Password"
              FloatingInput
              value={password}
              onChange={onChangeHandler}
              name="password"
            />
            <FloatingInput
              type="password"
              placeHolder="confirm your password"
              FloatingInput
              value={confirmPassword}
              onChange={onChangeHandler}
              name="confirmPassword"
            />

            <FormBtn custom="rounded-full" loading={false} />
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="text-[#7C7C7C] text-[13px] mx-auto ">
            Already Have an Account ?{" "}
            <span
              className="text-[#F77366] cursor-pointer"
              onClick={loginNavigate}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </Auth>
  );
};
export default VerifyPassword;
