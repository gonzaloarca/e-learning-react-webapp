import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        //navigate(`${"URL TO COGNITO LOGIN"}`);
        window.location.href = ("https://final-cloud-g7-auth-domain.auth.us-east-1.amazoncognito.com/login?client_id=bast2atl9hm3lopc88ie04k1&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/cognito/callback")
    };

    return (
        <Row align="middle" style={{
            padding: "5rem 2rem",
        }}>
            <Col span={10}>
                <span style={{ display: "block", margin: "0 auto", width: "80%" }}>
                    Omni is a platform for online learning and collaboration. It is a
                    free and open source platform that allows anyone to create and
                    share learning materials and content.
                </span>
                <Button onClick={navigateToLogin} style={{ display: "flex", margin: "1rem auto" }}>
                    <span>START YOUR JOURNEY</span>
                </Button>
            </Col>
            <Col span={14} style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ border: 0, display: "blox", height: "20rem", width: "32rem" }} alt="Animage" src="https://www.edukool.com/images/classroombanner_image.png" />
            </Col>
        </Row>
    );
};

export default Banner;