import React, { FC } from "react";
import { Row, Col } from "antd";
import styles from "./index.module.css";

const TimeAndServing: React.FC<{time: number, servings: number}> = ({time, servings}) => {
    return (
        <>
            <Row className={styles["row"]}>
                <Col className={styles["time"]}>🕓 {time} min</Col>
                <Col className={styles["servings"]}>🍴 {servings}</Col>
            </Row>
        </>
    );
};

export default TimeAndServing;
