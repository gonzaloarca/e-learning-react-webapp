import { CourseContentApiModel } from "../../models/coursesModels";
import styles from "../../assets/styles/CourseContentCard.module.scss";
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import clsx from "clsx";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import { useMutation } from "react-query";
import CoursesService from "../../services/courses";
import AwsService from "../../services/aws";

type CourseContentCardProps = {
    course: CourseContentApiModel;
    courseId: string;
    onDeleteContent: () => void;
}

const CourseContentCard = (props: CourseContentCardProps) => {

    const { courseId, onDeleteContent } = props;
    const { contentId, content, uploaded, downloadUrl } = props.course;

    const {
        mutate: deleteContent,
    } = useMutation(CoursesService.deleteContentById, {
        onSuccess: () => {
            console.log("Content deleted");
        },
        onError: () => {
            console.log("Error deleting content");
        }
    });

    const handleDelete = () => {
        deleteContent({ courseId, contentId });
        onDeleteContent();
    };

    const {
        mutate: downloadContent,
    } = useMutation(AwsService.get, {
        onSuccess: () => {
            console.log("Content downloaded");
        },
        onError: () => {
            console.log("Error downloading content");
        }
    });

    const handleDownload = () => {
        downloadContent(downloadUrl);
    };

    return (
        <div className={clsx(styles.contentCard)} style={{ background: globalStyles.primary3 }}>
            <div className={clsx(styles.contentData)}>
                <span>{content?.name}</span>
                <span>{content?.size}</span>
                <span>Uploaded {uploaded}</span>
            </div>
            <div className={clsx(styles.actions)}>
                <Tooltip title="Download">
                    <Button
                        size="middle"
                        onClick={handleDownload}
                        className={clsx(styles.iconButton)}
                        shape="circle"
                        icon={<DownloadOutlined />}
                    />
                </Tooltip>
                <Tooltip title="Delete">
                    <Button
                        size="middle"
                        onClick={handleDelete}
                        className={clsx(styles.iconButton, styles.deleteButton)}
                        shape="circle"
                        icon={<DeleteOutlined />}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default CourseContentCard;