import React from "react";
import { NextPage } from "next";
import Snack from "/public/snack.svg";
import Dessert from "/public/dessert.svg";
import Breakfast from "/public/breakfast.svg";
import Lunch from "/public/lunch.svg";
import Dinner from "/public/dinner.svg";
import Vegetarian from "/public/vegetarian.svg";

const Category: NextPage = () => {
    return (
            <div>
                <Snack/>
                <Dessert/>
                <Breakfast/>
                <Lunch/>
                <Dinner/>
                <Vegetarian/>
            </div>

    );
};

export default Category;