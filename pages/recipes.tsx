import { NextPage } from "next";
import { RecipeList } from "../components/recipeList";
import { useReduxSelector } from "../redux/hooks";

const Recipes: NextPage = () => {
    const loading = useReduxSelector(s => s.recipe.loading);
    const recipeList = useReduxSelector(s => s.recipe.recipeList);

    return (
        <RecipeList loading={loading} recipeList={recipeList} />
    );
};

export default Recipes;