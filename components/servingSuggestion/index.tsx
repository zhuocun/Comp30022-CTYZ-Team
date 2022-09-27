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

const ServingSuggestion: React.FC = () => {

        return (
            <>
                <Input
                    onChange={(e) => (e.target.value)}
                    placeholder="🍴Serving Suggestion" allowClear
                    className={styles.servingSuggestion}
                />
            </>
        );
    };

export default ServingSuggestion;