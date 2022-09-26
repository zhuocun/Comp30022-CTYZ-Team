interface Recipe {
    id: string;
    picture: string;
    title: string;
    tags: string[];
    ingredients: string[];
    methods: string[];
    category: string;
}

interface RecipeIntro {
    id: string;
    picture: string;
    title: string;
}