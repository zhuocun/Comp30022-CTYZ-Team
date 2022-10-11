import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Col, Row } from "antd";
import { Box } from "@chakra-ui/react";

interface CategoryIntro extends ICategory {
    key: number;
}

interface PropsType {
    categoryList: ICategory[] | null;
    loading: boolean;
}

const Category: React.FC<PropsType> = ({ categoryList, loading }) => {
    const categoryData: CategoryIntro[] = categoryList
        ? categoryList.map((c, index) => ({
              key: index,
              ...c
          }))
        : [];

    return (
        <div className={styles["categories"]}>
            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]} >
                            <img
                                className={styles["img"]}
                                src={"https://cdn.broadsheet.com.au/cache/47/a2/47a2d923be188058c559282a338944a5.jpg"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                                Breakfast
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://cdn.broadsheet.com.au/cache/4c/b6/4cb64a6fc45d7d50587cb0b37d800835.jpg"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name} 
                                Lunch
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>

            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name} 
                                Dinner
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />
                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                                Snack
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>

            <Row className={styles.row} gutter={[8, 16]}>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name}
                                Vegetarian
                            </Box>
                        </Box>
                    </Link>
                </Col>
                <Col className={styles.col} span={12}>
                    <Link href={`category/${categoryData[0]?._id}`}>
                        <Box className={styles["category"]}>
                            <img
                                className={styles["img"]}
                                src={"https://bit.ly/2Z4KKcF"}
                                alt={categoryData[0]?.name}
                            />

                            <Box className={styles["name"]}>
                                {categoryData[0]?.name} 
                                Dessert
                            </Box>
                        </Box>
                    </Link>
                </Col>
            </Row>
            {/*<div className={styles["categories"]}>*/}
            {/*    <Snack className={styles["category"]} />*/}
            {/*    <Dessert className={styles["category"]} />*/}
            {/*    <Breakfast className={styles["category"]} />*/}
            {/*    <Lunch className={styles["category"]} />*/}
            {/*    <Dinner className={styles["category"]} />*/}
            {/*    <Vegetarian className={styles["category"]} />*/}
            {/*</div>*/}
        </div>
    );
};

export default Category;
