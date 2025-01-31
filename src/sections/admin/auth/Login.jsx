import { useNavigate } from "react-router-dom";
import { FloatingInput, FormInputWrapper } from "../../../components/admin";
import { useState } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../state/admin/authenticationSlice";
import Auth from "../../../pages/auth/Auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetRouting = () => {
    navigate("/auth/forgot-password");
  };

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

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

    if (!email || !password) {
      toast.error("Please enter your details");
      return;
    }

    dispatch(loginUser(credentials)).then((result) => {
      if (result.payload) {
        setCredentials({ email: "", password: "" });
        navigate("/admin/dashboard");
      }
    });
  };

  return (
    <Auth>
      <div className="text-center text-[#3A3A3AB2] mb-10">
        <h3 className=" font-semibold text-xl mb-2">
          Admin sign in to HCMatrix User Guide
        </h3>
        <p className="text-[#7C7C7C] text-[13px]">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form className="  relative w-full" onSubmit={onSubmitHandler}>
        <FormInputWrapper>
          <FloatingInput
            placeHolder="Your email"
            value={email}
            type="email"
            onChange={onChangeHandler}
            name="email"
          />

          <FloatingInput
            type="password"
            placeHolder="Your password"
            FloatingInput
            value={password}
            onChange={onChangeHandler}
            name="password"
          />

          <FormBtn custom="rounded-full" loading={loading} />
        </FormInputWrapper>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[#7C7C7C] text-[13px] mx-auto ">
          Forgotten password ?{" "}
          <span
            className="text-[#F77366] cursor-pointer"
            onClick={resetRouting}
          >
            Reset
          </span>
        </p>
      </div>
    </Auth>
  );
};
export default Login;
