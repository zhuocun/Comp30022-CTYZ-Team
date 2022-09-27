import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const TimeEstimate: React.FC = () => {

        return (
            <>
                <Input
                    onChange={(e) => (e.target.value)}
                    placeholder="🕒Time Estimate" allowClear
                    className={styles.timeEstimate}
                />
            </>
        );
    };

export default TimeEstimate;