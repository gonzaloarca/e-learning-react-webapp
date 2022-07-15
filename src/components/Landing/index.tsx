import { Layout } from "antd";
import Banner from "./Banner";
import OmniHeader from "./Header";

const { Header, Content, Footer } = Layout

const Landing = () => {
    return (
        <Layout>
            <Header>
                <OmniHeader />
            </Header>
            <Content>
                <Banner />
            </Content>
        </Layout>
    );
};

export default Landing;