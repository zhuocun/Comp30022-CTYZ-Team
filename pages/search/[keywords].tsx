import { NextPage } from "next";
import { RecipeItem } from "../../components/recipeItem";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import React, { useEffect } from "react";
import { getRecipeList } from "../../redux/reducers/recipeSlice";
import { useRouter } from "next/router";

const SearchResult: NextPage = () => {
    const router = useRouter();
    const { keywords } = router.query;
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const loading = useReduxSelector(s => s.recipe.loading);
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        dispatch(getRecipeList({ jwtToken, keywords, categoryId: undefined }));
    }, [jwtToken, keywords]);
    const recipeItems: JSX.Element[] = [];
    if (recipeList) {
        for (const r of recipeList) {
            recipeItems.push(<RecipeItem loading={loading} recipeItem={r} />);
        }
    }
    return (
        <>
            {recipeItems}
        </>
    );
};

export default SearchResult;
