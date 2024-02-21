import { Container, Wrapper } from "../../../components/admin";
import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";

const ManageUser = () => {
  return (
    <Container>
      ManageUser
      <Layout>
        <SidePanel width="w-[28%]">
          <h3>Invite your team members</h3>
          <p>
            invite new members to your knowledge base or manage existing ones
          </p>
        </SidePanel>
        <MainContent>
          <Wrapper>
            <form></form>
          </Wrapper>
          <Wrapper>
            <h3>Manage Team Members</h3>
            <div>
              <header></header>
            </div>
          </Wrapper>
        </MainContent>
      </Layout>
    </Container>
  );
};
export default ManageUser;
