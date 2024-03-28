import { useSelector } from "react-redux";
import { Accordion, Container } from "../../../components/admin";
import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";

import { Toggler } from "../../../components/admin";
import Home from "../../../pages/user/Home";

const Customization = () => {
  const { toggler: toggle, accordion } = useSelector(
    (store) => store.customization
  );

  return (
    <Container>
      <Layout gap="gap-[11rem]">
        <MainContent className="flex-1 bg-white rounded-lg py-4 px-4">
          {accordion.map((content) => {
            return <Accordion key={content?.id} {...content} />;
          })}
          {toggle.map((action, index) => {
            return <Toggler key={index} {...action} />;
          })}
        </MainContent>
        <SidePanel>
          <div>
            <Home />
          </div>
        </SidePanel>
      </Layout>
    </Container>
  );
};
export default Customization;
