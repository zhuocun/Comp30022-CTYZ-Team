// import React, { useState } from 'react'
// import { Input } from "antd-mobile";
// import styles from "./index.module.css";

// const ServingSuggestion: React.FC = () => {
//     const [value, setValue] = useState('')

//     return (
//         <Input placeholder='🍴Serving Suggestion' clearable className={styles["servingSuggestion"]}/>
//     );
// };

// export default ServingSuggestion;

import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";
import styles from "./index.module.css";

const ServingSuggestion: React.FC<{
    setServing: Dispatch<SetStateAction<number | undefined>>
}> = ({ setServing }) => {

    return (
        <>
            <Input
                onChange={(e) => (setServing(parseInt(e.target.value)))}
                placeholder="🍴Serving Suggestion" allowClear
                className={styles.servingSuggestion}
            />
        </>
    );
};

export default ServingSuggestion;
