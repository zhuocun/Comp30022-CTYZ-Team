import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const TimeEstimate: React.FC<{
    setCookTime: Dispatch<SetStateAction<number | undefined>>
}> = ({ setCookTime }) => {

    return (
        <>
            <Input
                onChange={(e) => (setCookTime(parseInt(e.target.value)))}
                placeholder="🕒Time Estimate" allowClear
                className={styles.timeEstimate}
            />
        </>
    );
};

export default TimeEstimate;
