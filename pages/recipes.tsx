import { NextPage } from "next";
import { RecipeList } from "../components/recipeList";
import { useReduxDispatch, useReduxSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getRecipeList } from "../redux/reducers/recipeSlice";

const Recipes: NextPage = () => {
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const loading = useReduxSelector(s => s.recipe.loading);
    const recipeList = useReduxSelector(s => s.recipe.recipeList);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (jwtToken) {
            dispatch(getRecipeList(jwtToken));
        }
    }, [jwtToken]);

    return (
        <RecipeList loading={loading} recipeList={recipeList} />
    );
};

export default Recipes;