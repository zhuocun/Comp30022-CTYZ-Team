import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

interface PropsType {
    categoryItem: ICategory | null;
    loading: boolean;
}

const CategoryItem: React.FC<PropsType> = ({ categoryItem, loading }) => {

    return (
        <div className={styles["categories"]}>
            <Link href={`category/${categoryItem?._id}`}>
                <Box className={styles["category"]} boxSize={"40vw"}>
                    <img
                        className={styles["img"]}
                        src={categoryItem?.picture ? categoryItem.picture :
                            "https://cdn.broadsheet.com.au/cache/47/a2/47a2d923be188058c559282a338944a5.jpg"
                        }
                        alt={categoryItem?.name}
                    />
                    <Box className={styles["name"]}>
                        {categoryItem?.name}
                    </Box>
                </Box>
            </Link>
        </div>
    );
};

export default CategoryItem;
