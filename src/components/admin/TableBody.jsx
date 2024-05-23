import { menu } from "../../assets/admin/icons/articles";

const TableBody = ({ tableRows, loading }) => {
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
        <td
          className={`whitespace-nowrap px-6 py-4 font-medium ${
            loading && "skeleton"
          }`}
        >
          <img src={menu} alt="edit icon" />
        </td>
      </tr>
    );
  });
};

export default TableBody;
