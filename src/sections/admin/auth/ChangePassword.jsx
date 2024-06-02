import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FloatingInput } from "../../../components/admin";
import { useState, useEffect } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FormInputWrapper } from "../../../components/admin";
import Auth from "../../../pages/auth/Auth";
import { changePassword } from "../../../state/admin/authenticationSlice";
import { useDebouncedCallback } from "use-debounce";

const ChangePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    currentPassword: "",
    confirmPassword: "",
    password: "",
  });
  const { password, confirmPassword, currentPassword } = credentials;
  const { loading } = useSelector((store) => store.auth);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!currentPassword || !confirmPassword || !password) {
      toast.error("Please enter password");
      return;
    }

    if (confirmPassword !== password) {
      toast.error("New passwords do not match");
      return;
    }

    dispatch(changePassword(credentials)).then((result) => {
      if (result.payload) {
        setCredentials({
          currentPassword: "",
          confirmPassword: "",
          password: "",
        });

        useDebouncedCallback(() => {
          navigate("/admin/dashboard");
        }, 500);
      }
    });
  };

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  return (
    <Auth>
      <div className="text-center text-[#3A3A3AB2] mb-10">
        <h3 className=" font-semibold text-xl mb-2">Change you password</h3>
      </div>
      <form className="relative w-full" onSubmit={onSubmitHandler}>
        <FormInputWrapper>
          <FloatingInput
            type="password"
            placeHolder="Enter old password"
            FloatingInput
            value={currentPassword}
            onChange={onChangeHandler}
            name="currentPassword"
          />
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

          <FormBtn custom="rounded-full" loading={loading} />
        </FormInputWrapper>
      </form>

      <div className="mt-3 text-center">
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
export default ChangePassword;
