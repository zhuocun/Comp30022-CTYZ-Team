import { NextPage } from "next";
import { useRouter } from "next/router";
import { useReduxSelector } from "../../redux/hooks";

const Category: NextPage = () => {
    const router = useRouter();
    const { categoryId } = router.query;
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);

    return (
        <>{categoryId}{jwtToken}</>
    );
};

export default Category;
