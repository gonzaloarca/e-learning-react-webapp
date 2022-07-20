import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';
import clsx from 'clsx';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import formStyles from '../../assets/styles/Form.module.scss';
import Routes from '../../routes/routes';
import CoursesService from '../../services/courses';
import { getUserId } from '../../components/utils/session';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

const CreateNewCourse = () => {

    const DESCRIPTION_MAX_LENGTH = 1000;

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const type = newFileList[0]?.type;
        if (newFileList.length == 0 || !type || !ALLOWED_FILE_TYPES.includes(type)) {
            setFileList([]);
            return;
        }
        setFileList(newFileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const navigate = useNavigate();

    const { mutate } = useMutation(CoursesService.create, {
        onSuccess: () => {
            navigate(`1`);
        },
        onError: () => {
            // FIXME
            // navigate(Routes.Teaching.path);
        },
    });

    const onFinish = (values: any) => {
        console.log('Success:', values, fileList[0]);
        const { name, description } = values;
        const formData = new FormData();
        formData.append('image', fileList[0].originFileObj as Blob);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('user_id', getUserId());
        mutate(formData);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={clsx(globalStyles.contentContainer)}>
            <h1 className={clsx(formStyles.lastTitle)}>Create New Course</h1>
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
                        label="Pick a name for your course"
                        name="name"
                        rules={[
                            { required: true, message: 'Input your course name.' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Enter a description for your course"
                        name="description"
                        rules={[
                            { required: true, message: 'Input your course description.' },
                        ]}
                    >
                        <Input.TextArea rows={5} showCount maxLength={DESCRIPTION_MAX_LENGTH} />
                    </Form.Item>
                    <Form.Item
                        name="image"
                        label="Select an image for your course"
                    // valuePropName="fileList"
                    // getValueFromEvent={normFile}
                    >
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            beforeUpload={() => false}
                        >
                            {fileList.length == 0 ? uploadButton : null}
                        </Upload>
                        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={clsx(formStyles.submitButton)} type="primary" htmlType="submit">
                            CREATE
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
};

export default CreateNewCourse;