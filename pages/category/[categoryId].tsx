import { NextPage } from "next";
import { useRouter } from "next/router";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { RecipeList } from "../../components/recipeList";
import { getRecipeList } from "../../redux/reducers/recipeSlice";

const Category: NextPage = () => {
    const router = useRouter();
    const { categoryId } = router.query;
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const loading = useReduxSelector(s => s.recipe.loading);
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const dispatch = useReduxDispatch();
    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList({ jwtToken, keywords: undefined, categoryId }));
        }
    }, [jwtToken]);
    return (
        <RecipeList loading={loading} recipeList={recipeList} />
    );
};

export default Category;
