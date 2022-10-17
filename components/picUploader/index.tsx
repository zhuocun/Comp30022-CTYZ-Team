import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./index.module.css";
import { useReduxSelector } from "../../redux/hooks";
import { Upload, UploadFile, UploadProps } from "antd";
import { RcFile } from "antd/lib/upload";

const PicUploader: React.FC<{ setPic: Dispatch<SetStateAction<string>> }> =
    ({ setPic }) => {
        const [fileList, setFileList] = useState<UploadFile[]>();
        const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

        const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
            setFileList(newFileList);
        };

        const onPreview = async (file: UploadFile) => {
            let src = file.url as string;
            if (!src) {
                src = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj as RcFile);
                    reader.onload = () => resolve(reader.result as string);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow?.document.write(image.outerHTML);
        };

        return (
            <Upload
                headers={{
                    Authorization: jwtToken ? `Bearer ${jwtToken}` : ""
                }}
                action={`https://itproject-online-cookbook.herokuapp.com/api/v1/recipe/image`}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                className={styles.upload}>
                {/*<div*/}
                {/*    style={{*/}
                {/*        width: 100,*/}
                {/*        height: 80,*/}
                {/*        borderRadius: 40,*/}
                {/*        display: "flex",*/}
                {/*        justifyContent: "center",*/}
                {/*        alignItems: "center"*/}
                {/*    }}*/}
                {/*>*/}
                    {fileList? fileList.length < 1 && '+ Upload' : '+ Upload'}
                    {/*<PictureOutline style={{ fontSize: 32 }} />*/}
                {/*</div>*/}

            </Upload>

        );
    };

export default PicUploader;
