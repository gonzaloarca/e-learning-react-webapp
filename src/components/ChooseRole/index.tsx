import { Col, Row } from "antd";
import { Role } from "../../models/authModels";
import RoleCard from "./RoleCard";

const ChooseRole = () => {
    return (
        <Row>
            <Col span={12}>
                <RoleCard role={Role.STUDENT} />
            </Col>
            <Col span={12}>
                <RoleCard role={Role.PROFESSOR} />
            </Col>
        </Row>
    )
};

export default ChooseRole;