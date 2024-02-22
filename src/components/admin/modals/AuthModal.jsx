import { UserIcon } from "../../../assets/admin/icons/dashboard";
import { Lock, LogOut } from "../../../assets/admin/icons/dashboard";

const AuthModal = () => {
  return (
    <div className="absolute flex flex-col right-[4rem] border px-3 text-[17px] font-normal bg-white rounded-xl w-72 pt-6 pb-8 shadow-lg">
      <div className="w-[50px] h-[50px] rounded-full self-center bg-black"></div>

      {/* The Email */}
      <div className="py-5 border-y flex items-center gap-2 my-4">
        <UserIcon />
        <span className="text-[17px] font-normal text-customGray-fade">
          admin@gmail.com
        </span>
      </div>

      {/* The password and stuff */}
      <div className="flex gap-3 mb-3 items-center px-1">
        <Lock />
        <span>Change Password</span>
      </div>

      {/* The log out */}
      <div className="flex gap-2 font-normal items-center">
        <LogOut />
        <span>Log Out</span>
      </div>
    </div>
  );
};
export default AuthModal;
