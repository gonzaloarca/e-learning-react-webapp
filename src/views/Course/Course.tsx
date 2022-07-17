import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const Course = (props: Props) => {
	const { id } = useParams();

	return <div>Course</div>;
};

export default Course;
