import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import classes from './index.module.css';

function tagEditor(){
const [selected, setSelected] = useState(["dinner"]);
return (

	<div className={classes.editTags}>

	<TagsInput
		value={selected}
		onChange={setSelected}
		name="tags"
		placeHolder="➕Tags" 
	/>
	</div>

);
}


export default tagEditor;


