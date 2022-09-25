import { NextPage } from "next";
import { RecipeList } from "../../components/recipeList";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { searchForRecipe } from "../../redux/reducers/recipeSlice";
import { useRouter } from "next/router";

const SearchResult: NextPage = () => {
    const router = useRouter();
    const { keywords } = router.query;
    const loading = useReduxSelector(s => s.recipe.loading);
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        dispatch(searchForRecipe(keywords));
    }, [keywords]);

    return (
        <RecipeList loading={loading} recipeList={recipeList} />
    );
};

export default SearchResult;