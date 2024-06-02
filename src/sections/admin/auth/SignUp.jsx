import { useNavigate } from "react-router-dom";
import { FloatingInput, FormInputWrapper } from "../../../components/admin";
import { useState } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import Auth from "../../../pages/auth/Auth";

const SignUp = () => {
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = values;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your details");
    }

    if (password !== confirmPassword) {
      toast.error("Password Mismatch, try again");
    }
  };

  return (
    <Auth>
      <div className="text-center text-[#3A3A3AB2] mb-10">
        <h3 className=" font-semibold text-xl mb-2">
          Admin sign up to HCMatrix User Guide
        </h3>
        <p className="text-[#7C7C7C] text-[13px]">
          Welcome! Please enter your details to get started.
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

          <FloatingInput
            type="password"
            placeHolder="Confirm Password"
            FloatingInput
            value={confirmPassword}
            onChange={onChangeHandler}
            name="confirmPassword"
          />

          <FormBtn custom="rounded-full" />
        </FormInputWrapper>
      </form>

      <div className="mt-3 text-center">
        <p className="text-[#7C7C7C] text-[13px] mx-auto ">
          Already have an account ?{" "}
          <span
            className="text-[#F77366] cursor-pointer"
            onClick={loginNavigate}
          >
            log in
          </span>
        </p>
      </div>
    </Auth>
  );
};
export default SignUp;
