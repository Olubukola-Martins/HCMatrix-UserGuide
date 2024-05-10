import { useDispatch, useSelector } from "react-redux";
import { UserIcon } from "../../../assets/admin/icons/dashboard";
import { Lock, LogOut } from "../../../assets/admin/icons/dashboard";
import { useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import Cookies from "js-cookie";
import { LogoutHandler } from "../../../state/admin/authenticationSlice";
import { adminModalToggle } from "../../../state/admin/modalSlice";

const AuthModal = () => {
  const signOut = useSignOut();
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { adminModal } = useSelector((store) => store.modelSlice);

  const changePasswordHandler = () => {
    navigate("/auth/forgot-password");
  };

  const logOutHandler = () => {
    Cookies.remove("_auth");
    signOut();
    dispatch(LogoutHandler());
    navigate("/auth/login");
  };

  return (
    <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-[99] flex items-center  justify-center flex-col">
      {/* The overlay */}
      <div
        className="absolute inset-0 bg-black opacity-10"
        onClick={() => dispatch(adminModalToggle())}
      ></div>

      <div className="absolute flex flex-col top-16 right-[4rem] z-20 border px-3 text-[17px] font-normal bg-white rounded-xl w-72 pt-6 pb-8 shadow-lg">
        <div className="w-[50px] h-[50px] rounded-full self-center border grid place-items-center">
          <UserIcon />
        </div>

        {/* The Email */}
        <div className="py-5 border-y flex items-center gap-2 my-4">
          <UserIcon />
          <span className="text-[17px] font-normal text-customGray-fade">
            {user?.email}
          </span>
        </div>

        {/* The password and stuff */}
        <div className="flex gap-3 mb-3 items-center px-1">
          <Lock />
          <span onClick={changePasswordHandler} className="cursor-pointer">
            Change Password
          </span>
        </div>

        {/* The log out */}
        <div
          className="flex gap-2 font-normal items-center cursor-pointer"
          onClick={logOutHandler}
        >
          <LogOut />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
