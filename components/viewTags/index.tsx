import React, { FC } from "react";
import { Row, Col } from "antd";
import styles from "./index.module.css";

const viewTags: FC = () => {
    return (
        <>
            <Row className={styles["row"]}>
                <Col className={styles["tags"]}>#chocolate</Col>
                <Col className={styles["tags"]}>#baking</Col>
            </Row>
        </>
    );
};

export default viewTags;
