interface Recipe {
    id: string;
    pic: string;
    title: string;
    tags: string[];
    ingredients: string[];
    methods: string[];
    category: string;
}

interface RecipeIntro {
    id: string;
    pic: string;
    title: string;
}