import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./index.module.css";
import { useReduxSelector } from "../../redux/hooks";
import { Modal,Upload, UploadFile, UploadProps } from "antd";
import { RcFile } from "antd/lib/upload";

const getBase64 = (file: RcFile): Promise<string> =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = error => reject(error);
});

const PicUploader: React.FC<{ setPic: Dispatch<SetStateAction<{ src: string, imageId: string } | undefined>> }> =
    ({ setPic }) => {
        const [fileList, setFileList] = useState<UploadFile[]>();
        const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

        const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
            setFileList(newFileList);
            setPic(newFileList[0]?.response?.image);
        };
        
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleCancel = () => setPreviewOpen(false);

        return (
            <>
            <Upload
                headers={{
                    Authorization: jwtToken ? `Bearer ${jwtToken}` : ""
                }}
                action={`https://itproject-online-cookbook.herokuapp.com/api/v1/recipe/image`}
                method={"POST"}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={handlePreview}
                multiple={false}
                className={styles.upload}>
                {fileList ? fileList.length < 1 && "+ Upload" : "+ Upload"}
            </Upload>
             <Modal open={previewOpen} footer={null} onCancel={handleCancel}  className={styles["preview"]}>
             <img alt="example" style={{ width: '100%' }} src={previewImage}/>
           </Modal>
           </>
        );
    };

export default PicUploader;
