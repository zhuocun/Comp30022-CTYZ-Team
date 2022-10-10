import React from "react";
import { Route, Routes, MemoryRouter as Router } from "react-router-dom";

import FooterNavBar from "../components/footerNavBar";
import styles from "../styles/index.module.css";
import HistoryList from "./historyList";
import FavoriteList from "./favoriteList";
import Home from "./home";

export default () => {
    return (
        <Router initialEntries={["/home"]}>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/favoriteList" element={<FavoriteList />} />
                    <Route path="/historyList" element={<HistoryList />} />
                </Routes>
                <div className={styles.bottom}>
                    <FooterNavBar />
                </div>
            </div>
        </Router>
    );
};
