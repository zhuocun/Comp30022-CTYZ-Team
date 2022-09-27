import { NextPage } from "next";
import { useReduxSelector } from "../../redux/hooks";
import { useRouter } from "next/router";

const RecipeDetail: NextPage = () => {
    const router = useRouter();
    const { recipeIndex } = router.query;
    const index = typeof recipeIndex === "string" ? parseInt(recipeIndex) : null;
    const recipeList = useReduxSelector((s) => s.recipe.recipeList);

    if (recipeList && typeof index === "number") {
        return (
            <>
                title: {recipeList[index].title}
                <br />
                ingredients: {recipeList[index].ingredients.map((i) => (i))}
                <br />
                methods: {recipeList[index].methods.map((m) => (m))}
            </>
        );
    } else {
        return (<>{"no data"}</>);
    }


};

export default RecipeDetail;
