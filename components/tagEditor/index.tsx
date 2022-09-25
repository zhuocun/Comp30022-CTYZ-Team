import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import styles from './index.module.css';

const TagEditor: React.FC = () => {
const [selected, setSelected] = useState(["dinner"]);
return (

	<div className={styles.editTags}>

	<TagsInput
		value={selected}
		onChange={setSelected}
		name="tags"
		placeHolder="➕Tags" 
	/>
	</div>

);
}


export default TagEditor;


