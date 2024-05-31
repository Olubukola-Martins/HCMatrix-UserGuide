import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../../../components/admin";
import { useState } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../../pages/auth/Auth";
import { Select } from "antd";
import { FormContainer } from "../../../components/admin";
import { forgotPassword } from "../../../state/admin/authenticationSlice";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const [email, setEmail] = useState("");

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    dispatch(forgotPassword(email)).then((response) => {
      if (response.data) {
        setEmail("");
      }
    });
  };

  return (
    <Auth>
      <div className="text-center text-[#3A3A3AB2] mb-10">
        <h3 className=" font-semibold text-xl mb-2">
          Enter Email to reset password
        </h3>
      </div>
      <form className="  relative w-full" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-10">
          <FloatingInput
            placeHolder="Your email"
            value={email}
            type="email"
            onChange={onChangeHandler}
            name="email"
          />

          <FormBtn custom="rounded-full" loading={loading} />
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[#7C7C7C] text-[13px] mx-auto ">
          This was a mistake ?{" "}
          <span
            className="text-[#F77366] cursor-pointer"
            onClick={loginNavigate}
          >
            Log in
          </span>
        </p>
      </div>
    </Auth>
  );
};

export default ForgotPassword;
