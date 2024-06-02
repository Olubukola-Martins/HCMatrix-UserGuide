import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FloatingInput, FormInputWrapper } from "../../../components/admin";
import { useState, useEffect } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../../state/admin/authenticationSlice";
import Auth from "../../../pages/auth/Auth";
import { validatePassword } from "../../../services/passwordChecker";

const VerifyInvite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    confirmPassword: "",
    password: "",
    uid: "",
    token: "",
  });
  const { password, confirmPassword, uid, token } = credentials;
  const { loginMessage, user, loading, error } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");

    setCredentials((prev) => {
      return { ...prev, token: token, uid: uid };
    });
  }, [location.search]);

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

    if (!uid || !token) {
      toast.error("You cannot access this resource!");
      return;
    }

    dispatch(verifyUser(credentials)).then((result) => {
      if (result.payload) {
        setCredentials({
          confirmPassword: "",
          password: "",
          uid: "",
          token: "",
        });
        navigate("/admin/dashboard");
      }
    });
  };

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  return (
    <Auth>
      <div className="text-center text-[#3A3A3AB2] mb-10">
        <h3 className=" font-semibold text-xl mb-2">Enter You new Password</h3>
      </div>
      <form className="relative w-full" onSubmit={onSubmitHandler}>
        <FormInputWrapper>
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
export default VerifyInvite;
