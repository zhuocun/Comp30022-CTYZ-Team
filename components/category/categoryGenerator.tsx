import { Col, Row } from "antd";
import CategoryItem from "./index";
import React from "react";

const categoryGenerator = (categoryList: ICategory[] | null, loading: boolean): JSX.Element[] => {
    const categoryItem: JSX.Element[] = [];
    if (categoryList) {
        let count = 0;
        for (let i = 0; i < categoryList.length; i++) {
            if (i + 1 < categoryList.length) {
                categoryItem.push(
                    <Row>
                        <Col span={11} style={{ marginLeft: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i]} />
                        </Col>
                        <Col span={11} style={{ marginRight: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i + 1]} />
                        </Col>
                    </Row>
                );
                i++;
            } else {
                categoryItem.push(
                    <Row>
                        <Col span={11} style={{ marginLeft: "auto", marginTop: "7%" }}>
                            <CategoryItem loading={loading} categoryItem={categoryList[i]} />
                        </Col>
                    </Row>
                );
            }
        }
        count++;
    }
    return categoryItem;
};

export default categoryGenerator;
