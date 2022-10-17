interface IRecipe {
    picture?: string;
    title?: string;
    tags?: string[];
    ingredients?: string[];
    methods?: string[];
    category?: string | undefined;
    favorite?: boolean;
    imageId?: string;
    cookTime?: number;
    serve?: number;
    introduction?: string;
    completed?: string;
}

interface IRecipeListRes extends IRecipe {
    createBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

interface IRecipeIntro {
    key: number;
    id: string;
    picture: string;
    title: string;
}
