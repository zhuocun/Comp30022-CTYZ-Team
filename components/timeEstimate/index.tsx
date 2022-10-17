import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const TimeEstimate: React.FC<{
    setTime: Dispatch<SetStateAction<number | undefined>>
}> = ({ setTime }) => {

    return (
        <>
            <Input
                onChange={(e) => (setTime(parseInt(e.target.value)))}
                placeholder="🕒Time Estimate" allowClear
                className={styles.timeEstimate}
            />
        </>
    );
};

export default TimeEstimate;
