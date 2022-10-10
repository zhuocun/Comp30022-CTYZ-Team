import React, { FC } from "react";
import { TabBar } from "antd-mobile";
import {
    useNavigate,
    useLocation,
} from "react-router-dom";

import {
    HomeOutlined,
    CalendarOutlined,
    HeartOutlined,
    HistoryOutlined
} from "@ant-design/icons";
import styles from "./index.module.css";

const FooterNavBar: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const setRouteActive = (value: string) => {
        navigate(value);
    };

    const tabs = [
        {
            key: "/home",
            title: "Home",
            icon: <HomeOutlined/>
        },
        {
            key: "/favoriteList",
            title: "Favorites",
            icon: <HeartOutlined />
        },
        {
            // key: "/favoriteList",
            title: "Weekly Plan",
            icon: <CalendarOutlined />
        },
        {
            key: "/historyList",
            title: "History List",
            icon: <HistoryOutlined/>
        }
    ];
    return (
        <TabBar
            activeKey={pathname}
            onChange={(value) => setRouteActive(value)}
            className = {styles["activeButton"]}
        >
            {tabs.map((item) => (
                <TabBar.Item
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                   
                />
            ))}
        </TabBar>
    );
};

export default FooterNavBar;