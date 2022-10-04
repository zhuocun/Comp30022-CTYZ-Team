import React, { FC } from "react";
import styles from "./index.module.css";
import BackStoryLogo from "/public/backStory.svg";


const BackStory: FC = () => {
    return (
        <>
            <div className= {styles["ingredients"]}>
                <BackStoryLogo/>
                <p>Our old roommate, Sally, made this for us for our housewarming party.

This delicious spicy tuna crispy rice appetizer is made with crispy rectangles of seasoned sushi rice, fresh avocado slices, and a dollop of deliciously creamy, umami flavored, spicy ahi tuna with a slice of jalapeño for an extra kick! </p>
            </div>
        </>
    );
};

export default BackStory;
