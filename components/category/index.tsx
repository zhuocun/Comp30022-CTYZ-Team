import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Col, Row } from "antd";
import { Box } from "@chakra-ui/react";

interface CategoryIntro extends ICategory {
    key: number;
}

interface PropsType {
    categoryList: ICategory[] | null,
    loading: boolean
}

const Category: React.FC<PropsType> = ({ categoryList, loading }) => {
    const categoryData: CategoryIntro[] = categoryList
        ? (categoryList.map((c, index) => ({
            key: index,
            ...c
        }))) : [];

    return (
        <div style={{ marginLeft: 31 }}>
            <Row className={styles.row}>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`} replace={true}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
            </Row>

            <Row className={styles.row}>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`} replace={true}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
            </Row>

            <Row className={styles.row}>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
                <Col span={12}>
                    <Box maxW="150" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <img src={"https://bit.ly/2Z4KKcF"} alt={categoryData[0]?.name} />
                        <Link href={`category/${categoryData[0]?._id}`} replace={true}>
                            <div className={styles.text}>{categoryData[0]?.name}</div>
                        </Link>
                    </Box>
                </Col>
            </Row>
            {/*<div className={styles["categories"]}>*/
            }
            {/*    <Snack className={styles["category"]} />*/
            }
            {/*    <Dessert className={styles["category"]} />*/
            }
            {/*    <Breakfast className={styles["category"]} />*/
            }
            {/*    <Lunch className={styles["category"]} />*/
            }
            {/*    <Dinner className={styles["category"]} />*/
            }
            {/*    <Vegetarian className={styles["category"]} />*/
            }
            {/*</div>*/
            }
        </div>
    )
        ;
};

export default Category;
