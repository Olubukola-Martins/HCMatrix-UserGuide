
const TableBody = ({ tableRows }) => {
  return tableRows.map((row, index) => {
    const {sn, fullName, email, status, action} = row;
    
    const statusTextLogic = status ?"Accepted Invite": "Pending Invite";
    const statusStyleLogic = status?"text-green-600":"text-yellow-400";

    return <tr class="border-b" key={row.sn}>
      <td class="whitespace-nowrap px-6 py-4 font-medium">{++index}</td>
      <td class="whitespace-nowrap px-6 py-4 font-medium">{fullName}</td>
      <td class="whitespace-nowrap px-6 py-4 font-medium">{email} </td>
      <td class={`whitespace-nowrap px-6 py-4 font-medium ${statusStyleLogic}`}>{statusTextLogic} </td>
      <td class="whitespace-nowrap px-6 py-4 font-medium">
        <img src={action} alt="edit icon" />
      </td>
    </tr>
  }
  );
};

export default TableBody;
