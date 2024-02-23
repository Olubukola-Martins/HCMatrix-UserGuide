import { useSelector } from "react-redux";
import { Container } from "../../../components/admin";
import {
  Layout,
  MainContent,
  SidePanel,
} from "../../../components/admin/layout";

import { Toggler } from "../../../components/admin";

const Customization = () => {
  const { toggler: toggle } = useSelector((store) => store.customization);
  return (
    <Container>
      <Layout gap="gap-[12rem]">
        <MainContent className="flex-1 bg-white rounded-lg py-4 px-4">
          {toggle.map((action, index) => {
            return <Toggler key={index} {...action} />;
          })}
        </MainContent>
        <SidePanel></SidePanel>
      </Layout>
    </Container>
  );
};
export default Customization;
