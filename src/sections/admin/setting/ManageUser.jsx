import {
  Container,
  Wrapper,
  Input,
  TableHeader,
  TableBody,
  Button,
} from "../../../components/admin";

import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";
import { adminTableData, adminTableHeader } from "../../../data/admintableData";

const ManageUser = () => {
  return (
    <Container>
      ManageUser
      <Layout>
        <SidePanel>
          <div className="w-full flex flex-col gap-4">
            <h3 className=" font-bold mb-4">Invite your team members</h3>
            <p className="text-md leading-6 text-customGray-light">
              Invite new members to your knowledge base or manage existing ones:
            </p>
          </div>
        </SidePanel>
        <MainContent>
          <div className="flex flex-col gap-5">
            <Wrapper padding="p-6">
              <form className="flex flex-col gap-4">
                <h3 className="text-md font-semibold">Invite a new member</h3>
                <div className="flex flex-1 flex-wrap max-md:flex-col gap-3 justify-start mb-2">
                  <Input
                    placeholder="@gmail.com"
                    className="w-[40%]  min-w-[300px] max-md:w-full"
                  />
                  <Input
                    placeholder="first name"
                    className="w-[20%] capitalize min-w-[180px] max-md:w-full"
                  />
                  <Input
                    placeholder="last name"
                    className="w-[20%] capitalize min-w-[180px] max-md:w-full"
                  />
                </div>
                <Button message="invite members" />
              </form>
            </Wrapper>
            <Wrapper padding="p-6">
              <div className="flex flex-col gap-5">
                <h3 className="text-md font-semibold">Manage Team Members</h3>
                <table class="min-w-full text-left text-sm font-light">
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
