import { menu } from "../../assets/admin/icons/articles";
import { Popover } from "antd";
import { useDispatch } from "react-redux";
import { deleteUser, disableUser } from "../../state/admin/authenticationSlice";

const UsersContainer = ({ users, loading }) => {
  const dispatch = useDispatch();
  const manageUserHandler = (type, id) => {
    type === "delete" ? dispatch(deleteUser(id)) : dispatch(disableUser(id));
  };

  const content = (
    <div>
      <p
        className="cursor-pointer hover:text-customRed-light"
        onClick={() => manageUserHandler("delete")}
      >
        Delete
      </p>
      <p
        className="cursor-pointer hover:text-customRed-light"
        onClick={() => manageUserHandler()}
      >
        Disable
      </p>
    </div>
  );

  return users.map((user, index) => {
    const statusTextLogic = user?.user?.isVerified
      ? "Accepted Invite"
      : "Pending Invite";
    const statusStyleLogic = user?.user?.isVerified
      ? "text-green-600"
      : "text-yellow-400";

    const style = "px-6  py-4 md:block font-medium flex-1 text-left";

    return (
      <div className="grid grid-cols-[75%_25%] sm:grid-cols-[50%_30%_20%] md:grid-cols-[5%_20%_30%_30%_15%] overflow-hidden  border-b  justify-between">
        <span className={`${style} hidden ${loading && "skeleton"}`}>
          {++index}
        </span>
        <span className={`${style} hidden ${loading && "skeleton"}`}>
          {user?.firstName}
        </span>
        <span className={`${style} ${loading && "skeleton"}`}>
          {user?.user?.email}
        </span>
        <span
          className={`${style} hidden sm:block ${
            loading && "skeleton"
          } ${statusStyleLogic}`}
        >
          {statusTextLogic}
        </span>
        <span className={` ${style} ${loading && "skeleton"}`}>
          <Popover
            content={
              <div>
                <p
                  className="cursor-pointer hover:text-customRed-light"
                  onClick={() => manageUserHandler("delete", user?.id)}
                >
                  Delete
                </p>
                <p
                  className="cursor-pointer hover:text-customRed-light"
                  onClick={() => manageUserHandler("disable", user?.id)}
                >
                  Disable
                </p>
              </div>
            }
            trigger="hover"
            placement="right"
          >
            <img src={menu} alt="" className="min-h-5" />
          </Popover>
        </span>
      </div>
    );
  });
};

export default UsersContainer;
