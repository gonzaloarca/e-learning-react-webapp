import { Space, Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../../hooks/queryParamsHook";
import { Role } from "../../models/usersModels";
import Routes from "../../routes/routes";
import AuthService from "../../services/auth";
import { setRole, setSession } from "../utils/session";

const CognitoCallback = () => {

    const query = useQueryParams();
    const navigate = useNavigate();

    useEffect(() => {
        
        const code = query.get("code");
        if (code) {
            query.set("code", "");
            AuthService.login(code).then(auth => {
                setSession(auth.token);
                if (auth.user.role === Role.NONE) {
                    navigate(Routes.Landing.chooseRole);
                } else {
                    setRole(auth.user.role);
                    navigate("/" + Routes.Courses.path);
                }
            });
        }
    }, [query]);

    return (
        <div style={{ justifyContent: "center", display: "flex", height: "100vh" }}>
            <Space size="middle">
                <Spin size="large" tip="Reading code..." />
            </Space>
        </div>
    );
};

export default CognitoCallback;