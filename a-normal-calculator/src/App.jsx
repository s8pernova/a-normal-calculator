import "./App.css";
import Button from "./components/button";
import Screen from "./components/screen";

const App = () => {
	return (
		<div className="main-container">
			<div className="calculator-container">
        <Screen />
				<div className="main-btn-container">
					<Button id="7" />
					<Button id="8" />
					<Button id="9" />
					<Button id="÷" />
					<Button id="4" />
					<Button id="5" />
					<Button id="6" />
					<Button id="×" />
					<Button id="1" />
					<Button id="2" />
					<Button id="3" />
					<Button id="-" />
					<Button id="0" />
					<Button id="." />
					<Button id="(-)" />
					<Button id="enter" />
				</div>
			</div>
		</div>
	);
};

export default App;
