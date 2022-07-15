import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate(`${"URL TO COGNITO LOGIN"}`);
    };

    return (
        <div style={{
            padding: "0 5rem 0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <span>
                OMNI LOGO
            </span>
            <Button onClick={navigateToLogin}>
                Go to the platform
            </Button>
        </div>
    );
};

export default Header;