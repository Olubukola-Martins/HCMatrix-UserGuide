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

const SetNewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = useSignIn();

  const {} = useState();

  const signUpNavigate = () => {
    navigate("/auth/sign-up");
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
      }
    });
  };

  useEffect(() => {
    if (token) {
      if (
        signIn({
          auth: {
            token: token,
            type: "Bearer",
          },
          userState: { user: user },
        })
      ) {
        toast.success("Welcome back!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Something went wrong");
      }
    }
  }, [token]);

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  return (
    <Auth>
    
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
              placeHolder="confirm you password"
              FloatingInput
              value={password}
              onChange={onChangeHandler}
              name="password"
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
 
    </Auth>
  );
};
export default SetNewPassword;
