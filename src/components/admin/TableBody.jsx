import { menu } from "../../assets/admin/icons/articles";
import { Popover } from "antd";
import { useDispatch } from "react-redux";
import { deleteUser, disableUser } from "../../state/admin/authenticationSlice";

const TableBody = ({ tableRows, loading }) => {
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

  return tableRows.map((user, index) => {
    const statusTextLogic = user?.user?.isVerified
      ? "Accepted Invite"
      : "Pending Invite";
    const statusStyleLogic = user?.user?.isVerified
      ? "text-green-600"
      : "text-yellow-400";

    return (
      <tr className="border-b" key={index}>
        <td
          className={`whitespace-nowrap px-6 py-4 font-medium ${
            loading && "skeleton"
          }`}
        >
          {++index}
        </td>
        <td
          className={`whitespace-nowrap px-6 py-4 font-medium ${
            loading && "skeleton"
          }`}
        >
          {user?.firstName}
        </td>
        <td
          className={`whitespace-nowrap px-6 py-4 font-medium ${
            loading && "skeleton"
          }`}
        >
          {user?.user?.email}{" "}
        </td>
        <td
          className={`whitespace-nowrap px-6 py-4 font-medium ${
            loading && "skeleton"
          } ${statusStyleLogic}`}
        >
          {statusTextLogic}{" "}
        </td>
        <td className={` px-6 py-4 font-medium ${loading && "skeleton"}`}>
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
            <img src={menu} alt="" />
          </Popover>
        </td>
      </tr>
    );
  });
};

export default TableBody;
