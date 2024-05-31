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

import { UsersContainer } from "../../../components/admin";

import { useEffect, useState } from "react";

import {
  deleteUser,
  disableUser,
} from "../../../state/admin/authenticationSlice";

import { FormBtn } from "../../../components/common";

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

const HeaderText = ({ children, className }) => {
  return (
    <span className={`md:flex-1  px-6  py-4 ${className}`}>{children}</span>
  );
};

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
              <form
                className="flex flex-col gap-4 overflow-hidden"
                onSubmit={onSubmitHandler}
              >
                <h3 className="text-md font-semibold text-center md:text-left ">
                  Invite A New Member
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 justify-start mb-2">
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

                  <FormBtn loading={loading} />
                </div>
              </form>
            </Wrapper>

            <Wrapper padding="p-6 pb-10">
              <div className="flex flex-col gap-7 overflow-hidden">
                <h3 className="text-md  text-center md:text-left  font-semibold">
                  Manage Team Members
                </h3>

                <section className="w-full border">
                  <div>
                    <header className="grid grid-cols-[75%_25%] sm:grid-cols-[50%_30%_20%] md:grid-cols-[5%_20%_30%_30%_15%] border-b justify-between">
                      <HeaderText className={`hidden md:block `}></HeaderText>
                      <HeaderText className={`hidden  `}>Name</HeaderText>
                      <HeaderText>Email Address</HeaderText>
                      <HeaderText className={`hidden sm:block `}>
                        Status
                      </HeaderText>
                      <HeaderText>Action</HeaderText>
                    </header>
                    <main className="flex flex-col">
                      <UsersContainer users={userToShow} />
                    </main>
                  </div>
                </section>

                {users.length > 5 && (
                  <Pagination
                    pageSize={pageSize}
                    current={currentPage}
                    onChange={handlePageChange}
                    total={users.length}
                  />
                )}
              </div>
            </Wrapper>
          </div>
        </MainContent>
      </Layout>
    </Container>
  );
};
export default ManageUser;
