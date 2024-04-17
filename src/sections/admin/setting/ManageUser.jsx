import {
  Container,
  Wrapper,
  TableHeader,
  TableBody,
  Button,
  FormContainer,
} from "../../../components/admin";

import { Input } from "../../../components/common";

import { useState } from "react";

import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";
import { adminTableData, adminTableHeader } from "../../../data/admintableData";

const ManageUser = () => {
  const [newMember, setNewMember] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(newMember);
    }, 5000);
  };

  return (
    <Container>
      <Layout>
        <SidePanel>
          <div className="w-full flex flex-col gap-3">
            <h3 className=" font-bold">Invite your team members</h3>
            <p className="text-[12px] leading-6 font-medium text-customGray-light">
              Invite new members to your knowledge base or manage existing ones:
            </p>
          </div>
        </SidePanel>
        <MainContent>
          <div className="flex flex-col gap-5">
            <Wrapper padding="p-6">
              <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
                <h3 className="text-md font-semibold">Invite a new member</h3>
                <div className="flex flex-1 flex-wrap max-md:flex-col gap-3 justify-start mb-2">
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
                </div>
                <Button message="invite members" />
              </form>
            </Wrapper>

            <Wrapper padding="p-6 pb-10">
              <div className="flex flex-col gap-7">
                <h3 className="text-md font-semibold">Manage Team Members</h3>
                <table class="min-w-full text-left text-sm font-light pb-5 font-poppins">
                  <thead class="border-b font-medium">
                    {adminTableHeader.map((header) => (
                      <TableHeader key={header} value={header} />
                    ))}
                  </thead>
                  <tbody>
                    <TableBody tableRows={adminTableData} />
                  </tbody>
                </table>
              </div>
            </Wrapper>
          </div>
        </MainContent>
      </Layout>
    </Container>
  );
};
export default ManageUser;
