import { RecipeItem } from "./index";
import React from "react";

const recipesGenerator = (recipeList: IRecipeListRes[] | null, loading: boolean, isFavList: boolean) => {
    const recipeItems: JSX.Element[] = [];
    if (recipeList) {
        for (const r of recipeList) {
            recipeItems.push(<RecipeItem loading={loading} recipeItem={r} isFavList={isFavList} />);
        }
    }
    return recipeItems;
};

export default recipesGenerator;
