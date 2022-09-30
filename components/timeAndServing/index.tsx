import React, { FC } from "react";
import { Row, Col } from "antd";
import styles from "./index.module.css";

const TimeAndServing: FC = () => {
    return (
        <>
            <Row className={styles["row"]}>
                <Col className={styles["time"]}>🕓 45 mins</Col>
                <Col className={styles["servings"]}>🍴 12</Col>
            </Row>
        </>
    );
};

export default TimeAndServing;
