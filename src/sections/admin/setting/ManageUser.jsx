import {
  Container,
  Wrapper,
  TableHeader,
  TableBody,
  Button,
} from "../../../components/admin";

import { inviteUser } from "../../../state/admin/authenticationSlice";

import { toast } from "react-toastify";

import { Input } from "../../../components/common";

import { useEffect, useState } from "react";

import {
  deleteUser,
  disableUser,
} from "../../../state/admin/authenticationSlice";

import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";
import { adminTableData, adminTableHeader } from "../../../data/admintableData";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { usePagination } from "../../../hooks/common";
import { getUsers } from "../../../state/admin/adminData/thunkFunctions";

const ManageUser = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const { isLoading, users } = useSelector((store) => store.adminData);

  const placeholder = [
    {
      userId: 3,
      firstName: "Usman",
      user: {
        email: "soliuomogbolahan01@gmail.com",
        isVerified: true,
      },
    },
    {
      userId: 3,
      firstName: "Usman",
      user: {
        email: "soliuomogbolahan01@gmail.com",
        isVerified: true,
      },
    },
    {
      userId: 3,
      firstName: "Usman",
      user: {
        email: "soliuomogbolahan01@gmail.com",
        isVerified: true,
      },
    },
    {
      userId: 3,
      firstName: "Usman",
      user: {
        email: "soliuomogbolahan01@gmail.com",
        isVerified: true,
      },
    },
    {
      userId: 3,
      firstName: "Usman",
      user: {
        email: "soliuomogbolahan01@gmail.com",
        isVerified: true,
      },
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const init = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [newMember, setNewMember] = useState(init);
  const { email, firstName, lastName } = newMember;

  const pageSize = 5;

  const {
    currentPage,
    paginatedData: userToShow,
    handlePageChange,
  } = usePagination(users, pageSize);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if ((email === "", firstName === "", lastName === "")) {
      toast.error("please enter values");
      return;
    }

    dispatch(inviteUser(newMember));
    setNewMember(init);
  };

  return (
    <Container>
      <Layout>
        <SidePanel>
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-customGray-dark font-bold">
              Invite your team members
            </h3>
            <p className="text-[12px] leading-6 font-medium text-customGray-light">
              Invite new members to your knowledge base or manage existing ones:
            </p>
          </div>
        </SidePanel>
        <MainContent>
          <div className="flex flex-col gap-5 text-customGray-dark">
            <Wrapper padding="p-6">
              <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
                <h3 className="text-md font-semibold ">Invite A New Member</h3>
                <div className="grid grid-cols-3 gap-3 justify-start mb-2">
                  <Input
                    onChange={onChangeHandler}
                    type="email"
                    name="email"
                    value={newMember?.email}
                    placeholder="@gmail.com"
                    className="w-[40%]"
                  />

                  <Input
                    onChange={onChangeHandler}
                    type="text"
                    name="firstName"
                    value={newMember?.firstName}
                    placeholder="first name"
                    className="w-[20%] capitalize"
                  />

                  <Input
                    onChange={onChangeHandler}
                    type="text"
                    name="lastName"
                    value={newMember?.lastName}
                    placeholder="last name"
                    className="w-[20%] capitalize"
                  />
                  <Button
                    message="invite members"
                    margin={"mt-4"}
                    loading={loading}
                  />
                </div>
              </form>
            </Wrapper>

            <Wrapper padding="p-6 pb-10">
              <div className="flex flex-col gap-7">
                <h3 className="text-md font-semibold">Manage Team Members</h3>
                <table className="min-w-full text-left text-sm font-light pb-5 font-poppins">
                  <thead className="border-b font-medium">
                    {adminTableHeader.map((header) => (
                      <TableHeader key={header} value={header} />
                    ))}
                  </thead>
                  <tbody>
                    <TableBody tableRows={userToShow} loading={isLoading} />
                  </tbody>
                </table>

                <Pagination
                  pageSize={pageSize}
                  current={currentPage}
                  onChange={handlePageChange}
                  total={users.length}
                />
              </div>
            </Wrapper>
          </div>
        </MainContent>
      </Layout>
    </Container>
  );
};
export default ManageUser;
