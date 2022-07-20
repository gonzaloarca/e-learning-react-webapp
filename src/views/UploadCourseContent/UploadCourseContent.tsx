import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';
import clsx from 'clsx';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import { CourseOverviewApiModel } from '../../models/coursesModels';
import formStyles from '../../assets/styles/Form.module.scss';
import Routes from '../../routes/routes';
import CoursesService from '../../services/courses';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

const UploadCourseContent = () => {

    const { id } = useParams();

    const { data: course, isSuccess: courseIsSuccess } = useQuery<CourseOverviewApiModel>(["Course", id], () => CoursesService.getById(id!));

    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const navigate = useNavigate();

    const { mutate } = useMutation(CoursesService.uploadContent, {
        onSuccess: () => {
            navigate(`/teaching/${course!.data.id}`);
        },
        onError: () => {
            // FIXME
            // navigate(Routes.Teaching.path);
        },
    });

    const onFinish = (values: any) => {
        //console.log('Success:', values, fileList[0]);
        const { name } = values;
        const formData = new FormData();
        formData.append('content', fileList[0].originFileObj as Blob);
        formData.append('file', fileList[0].originFileObj as File);
        mutate({
            id: course!.data.id,
            content: {
                name: name,
                size: fileList[0]?.size,
                type: fileList[0]?.type,
                base64: fileList[0]?.thumbUrl,
            },
            file: formData
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={clsx(globalStyles.contentContainer)}>
            <h1 style={{ marginBottom: 0 }}>Upload New Content</h1>
            {courseIsSuccess && <h3 className={clsx(formStyles.lastTitle)}>Course: {course.data.name} (created by {course.owner.name})</h3>}
            <div className={clsx(formStyles.container)}>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{
                        width: "35rem"
                    }}
                >
                    <Form.Item
                        label="Pick a name for the course content"
                        name="name"
                        rules={[
                            { required: true, message: 'Input your course content name.' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="Select content file for your course"
                    >
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={handleChange}
                            beforeUpload={() => false}
                        >
                            {fileList.length == 0 ? uploadButton : null}
                        </Upload>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={clsx(formStyles.submitButton)} type="primary" htmlType="submit" >
                            UPLOAD
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default UploadCourseContent;