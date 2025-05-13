import { useState } from "react";

const Button = (props) => {
	const [count, setCount] = useState(0);

	return (
		<>
			<button className="btn" onClick={() => setCount(count + 1)}>
				{props.id}
			</button>
		</>
	);
};

export default Button;
