import { useState } from "react";

const Screen = (props) => {
	return (
		<div className="screen">
			<h1>{props.value}</h1>
		</div>
	);
};

export default Screen;
