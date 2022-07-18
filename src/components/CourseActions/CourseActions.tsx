import { Button } from "antd";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Role } from "../../models/usersModels";
import { getRole } from "../utils/session";
import styles from "../../assets/styles/CourseActions.module.scss";
import React from "react";

const CourseActions = () => {
    const location = useLocation();
    const { pathname } = location;
    const canEdit = pathname.includes('teaching') && getRole() === Role.TEACHER;

    const navigate = useNavigate();

    const onClickUploadNewContent = () => {
        navigate(`upload-content`);
    }

    return (
        <React.Fragment>
            {
                canEdit && (
                    <div className={clsx(styles.courseActions)}>
                        <Button onClick={onClickUploadNewContent}>
                            Upload New Content
                        </Button>
                        {/* <Button className="ml-4">
                            Upload New Lecture
                        </Button> */}
                    </div>
                )
            }
        </React.Fragment>
    );
};

export default CourseActions;