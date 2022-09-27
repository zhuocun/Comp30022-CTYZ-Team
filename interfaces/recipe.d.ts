interface Recipe {
    id: string;
    picture: string;
    title: string;
    tags: string[];
    ingredients: string[];
    methods: string[];
    category: string;
}

interface RecipeListRes {
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

interface RecipeIntro {
    id: string;
    picture: string;
    title: string;
}
