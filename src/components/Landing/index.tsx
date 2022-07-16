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
                {/* TODO: add some statistics about the site or some benefits of using it */}
            </Content>
            {/* TODO: add footer */}
        </Layout>
    );
};

export default Landing;