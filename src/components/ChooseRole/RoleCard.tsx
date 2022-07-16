import { Card } from "antd";
import { Role } from "../../models/authModels";
const { Meta } = Card;

export type RoleCardProps = {
    role: Role;
    onClick: React.MouseEventHandler;
    isSelected: boolean;
};

type RoleProperties = {
    image: string;
    title: string;
    description: string;
}

const ProfessorProperties: RoleProperties = {
    // image: "https://ontesol.com/wp-content/uploads/2020/03/esl-ONLINE-TEACHER.png",
    image: "https://media.istockphoto.com/vectors/online-education-or-business-training-concept-online-man-mentor-on-vector-id1219446896?k=20&m=1219446896&s=612x612&w=0&h=NYGH2AFoVz87IJqQ6zIS-uuBHAh8ZQ8_Q8TQHpFQges=",
    title: "Professor",
    description: "You can create courses."
};

const StudentProperties: RoleProperties = {
    image: "https://media.istockphoto.com/vectors/quarantine-vector-id1257249850?b=1&k=20&m=1257249850&s=612x612&w=0&h=54FekAEK-cIzS91lJWGPbjmwZzNYvRsR7m2O5wI-1pw=",
    title: "Student",
    description: "You can view courses and enroll in them."
};

const RoleCard = (props: RoleCardProps) => {

    const { role, onClick, isSelected } = props;
    const properties: RoleProperties = role === Role.PROFESSOR ? ProfessorProperties : StudentProperties;

    const renderTitle = () => {
        return (
            <p>
                <strong>{properties.title}</strong>
            </p>
        );
    };

    const renderDescription = () => {
        return (
            <p>
                {properties.description}
            </p>
        );
    };

    return (
        <Card style={isSelected ? { width: "20rem", boxShadow: "0px 0px 21px 6px #000000", borderRadius: "1rem" } : { width: "20rem", borderRadius: "1rem" }} hoverable cover={<img alt="example" src={properties.image} style={{ width: "20rem", height: "25rem", objectFit: "cover", padding: "2rem" }} />} onClick={onClick} >
            <Meta title={renderTitle()} description={renderDescription()} />
        </Card>
    );
};

export default RoleCard;