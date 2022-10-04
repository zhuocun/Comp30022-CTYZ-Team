import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface RecipeState {
    loading: boolean;
    error: string | null;
    recipe: IRecipe | null;
    recipeList: IRecipeListRes[] | null;
    recipeCache: IRecipe | null;
}

const initialState: RecipeState = {
    loading: false,
    error: null,
    recipe: null,
    recipeList: null,
    recipeCache: null
};

export const createRecipe = createAsyncThunk(
    "recipe/createRecipe",
    async (parameters: {
        jwtToken: string | null, recipe: IRecipe | null
    }) => {
        const axiosResponse = await axios.post(
            `https://itproject-online-cookbook.herokuapp.com/api/v1/recipe`,
            {
                title: parameters.recipe?.title,
                category: parameters.recipe?.category,
                methods: parameters.recipe?.methods,
                ingredients: parameters.recipe?.ingredients,
                tags: parameters.recipe?.tags,
                picture: parameters.recipe?.picture
            },
            {
                headers: {
                    Authorization: `Bearer ${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const getRecipeList = createAsyncThunk(
    "recipe/getRecipeList",
    async (
        parameters: {
            jwtToken: string | null,
            keywords: string | string[] | undefined,
            categoryId: string | string[] | undefined
        }
    ) => {
        let url = `https://itproject-online-cookbook.herokuapp.com/api/v1/recipe`;
        url += parameters.keywords ? `keywords=${parameters.keywords}` : "";
        url += parameters.categoryId ? `category=${parameters.categoryId}` : "";
        const axiosResponse = await axios.get(
            url,
            {
                headers: {
                    Authorization: `Bearer ${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data.recipes;
    }
);

export const updateRecipe = createAsyncThunk(
    "recipe/updateRecipe",
    async (parameters: {
        jwtToken: string | null, recipeId: string | null, recipe: IRecipe | null
    }) => {
        const axiosResponse = await axios.put(
            ``,
            {
                recipeId: parameters.recipeId,
                recipe: parameters.recipe
            },
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const deleteRecipe = createAsyncThunk(
    "recipe/deleteRecipe",
    async (parameters: {
        jwtToken: string | null, recipeId: string | null
    }) => {
        const axiosResponse = await axios.delete(
            ``,
            {
                headers: {
                    tokens: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse;
    }
);

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.error = null;
            state.recipe = null;
        }
    },
    extraReducers: {
        [createRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [createRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [createRecipe.rejected.type]: (
            state,
            action
        ) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [updateRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [updateRecipe.rejected.type]: (
            state,
            action
        ) => {
            state.loading = false;
            state.recipe = action.payload;
        },
        [deleteRecipe.pending.type]: (state) => {
            state.loading = true;
        },
        [deleteRecipe.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.recipe = action.payload;
        },
        [deleteRecipe.rejected.type]: (
            state
        ) => {
            state.loading = false;
            state.recipe = null;
        },
        [getRecipeList.pending.type]: (state) => {
            state.loading = true;
        },
        [getRecipeList.fulfilled.type]: (state, action: PayloadAction<IRecipeListRes[] | null>) => {
            state.loading = false;
            state.error = null;
            state.recipeList = action.payload;
        },
        [getRecipeList.rejected.type]: (
            state,
            action
        ) => {
            state.loading = false;
            state.error = action.payload;
        }

    }
});
