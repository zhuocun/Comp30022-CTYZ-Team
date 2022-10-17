interface IRecipe {
    picture: string;
    title: string;
    tags: string[];
    ingredients: string[];
    methods: string[];
    category: string | undefined;
    favorite: boolean;
    imageId: string;
}

interface IRecipeListRes {
    completed: string;
    category: string;
    createBy: string;
    createdAt: string;
    favorite: boolean;
    imageId: string;
    ingredients: string[];
    methods: string[];
    picture: string;
    tags: string[];
    title: string;
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
