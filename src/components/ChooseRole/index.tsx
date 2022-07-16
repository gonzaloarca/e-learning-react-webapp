import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Role } from '../../models/authModels';
import Routes from '../../routes/routes';
import RoleCard from './RoleCard';

const ChooseRole = () => {
	const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);

	const onClickRole = (role: Role) => {
		setSelectedRole(role);
	};

	const navigate = useNavigate();

	const onClickContinue = async () => {
		// TODO: send role to API
		navigate(Routes.Courses.path);
	};

	return (
		<div style={{ padding: '1rem 5rem' }}>
			<div>
				<h1 style={{ textAlign: 'center' }}>Choose your role</h1>
			</div>
			<Row style={{ justifyContent: 'space-evenly' }}>
				<Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
					<RoleCard
						role={Role.STUDENT}
						onClick={e => onClickRole(Role.STUDENT)}
						isSelected={selectedRole === Role.STUDENT}
					/>
				</Col>
				<Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
					<RoleCard
						role={Role.PROFESSOR}
						onClick={e => onClickRole(Role.PROFESSOR)}
						isSelected={selectedRole === Role.PROFESSOR}
					/>
				</Col>
			</Row>
			{selectedRole !== undefined && (
				<div style={{ display: 'flex' }}>
					<Button
						style={{ marginRight: 0, marginLeft: 'auto' }}
						onClick={onClickContinue}
					>
						Continue
					</Button>
				</div>
			)}
		</div>
	);
};

export default ChooseRole;
