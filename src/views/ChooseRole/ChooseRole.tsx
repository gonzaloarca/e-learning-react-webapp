import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Role } from '../../models/usersModels';
import Routes from '../../routes/routes';
import UsersService from '../../services/users';
import RoleCard from '../../components/RoleCard';
import { setRole } from '../../components/utils/session';

const ChooseRole = () => {
	const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);

	const onClickRole = (role: Role) => {
		setSelectedRole(role);
	};

	const navigate = useNavigate();

	const { mutate } = useMutation(UsersService.chooseRole, {
		onSuccess: () => {
			navigate("/" + Routes.Courses.path);
		},
		onError: () => {
			navigate(Routes.Landing.path);
		},
	});

	const onClickContinue = () => {
		setRole(selectedRole!);
		mutate(selectedRole!);
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
						role={Role.TEACHER}
						onClick={e => onClickRole(Role.TEACHER)}
						isSelected={selectedRole === Role.TEACHER}
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
