import { useState } from "react";

const Screen = (props) => {
	return (
		// <div className="screen-border">
            <div className="screen">
                <h1>{props.value}</h1>
            </div>
        // </div>
	);
};

export default Screen;
