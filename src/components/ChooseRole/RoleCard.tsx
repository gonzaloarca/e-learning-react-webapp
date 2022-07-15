import { Card } from "antd";
const { Meta } = Card;
import { Role } from "../../models/authModels";

export type RoleCardProps = {
    role: Role;
};

const RoleCard = (props: RoleCardProps) => {

    const { role } = props;

    return (
        <Card hoverable cover={<img alt="example" src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}>
            <Meta title={role} description={"role description"} />
        </Card>
    );
};

export default RoleCard;