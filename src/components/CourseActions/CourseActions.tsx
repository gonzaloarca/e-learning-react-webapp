import { Button } from "antd";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../assets/styles/CourseActions.module.scss";
import React from "react";
import { SUBSCRIPTION_STATUS } from "../../models/coursesModels";

type CourseActionsProps = {
    subscriptionStatus: SUBSCRIPTION_STATUS;
    onClickSubscribe: () => void;
};

const CourseActions = (props: CourseActionsProps) => {

    const { subscriptionStatus, onClickSubscribe } = props;

    const navigate = useNavigate();

    const onClickUploadNewContent = () => {
        navigate(`upload-content`);
    }
    const location = useLocation();
    const isTeachingPage = location.pathname.includes("teaching");

    const renderUploadNewContentButton = () => {
        if (!isTeachingPage) {
            return null;
        }

        return (
            <React.Fragment>
                <Button onClick={onClickUploadNewContent}>
                    Upload New Content
                </Button>
                {/* <Button className="ml-4">
                    Upload New Lecture
                </Button> */}
            </React.Fragment>
        );
    };

    const isExplorePage = location.pathname.includes("explore");

    const renderSubscriptionButton = () => {
        if (!isExplorePage) {
            return null;
        }

        return (
            <Button onClick={onClickSubscribe}>
                Subscribe
            </Button>
        );
    };

    const renderNotSubscriptionText = () => {
        if (!isExplorePage) {
            return null;
        }

        return (
            <div>
                Subscribed to this Course
            </div>
        );
    };


    const renderActions = () => {
        switch (subscriptionStatus) {
            case SUBSCRIPTION_STATUS.NOT_SUBSCRIBED:
                return renderSubscriptionButton();
            case SUBSCRIPTION_STATUS.SUBSCRIBED:
                return renderNotSubscriptionText();
            case SUBSCRIPTION_STATUS.OWNER:
                return renderUploadNewContentButton();
        }
    };

    return (
        <div className={clsx(styles.courseActions)}>
            {
                renderActions()
            }
        </div>
    );
};

export default CourseActions;