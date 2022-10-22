import { IconType } from "antd/lib/notification";
import { notification } from "antd";

const openNotification = (description: string, type: IconType | undefined) => {
    notification.open(
        {
            message: "Notification",
            placement: "top",
            description,
            duration: 1.2,
            type: type
        }
    );
};

export default openNotification;
