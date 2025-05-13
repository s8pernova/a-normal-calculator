import "./App.css";

const App = () => {
	return (
		<div className="main-container">
			<div className="calculator-container">
				<div className="screen"></div>
				<div className="main-btn-container">
					<div className="function-btns">
						<h3>y=</h3>
						<h3>window</h3>
						<h3>zoom</h3>
						<h3>trace</h3>
						<h3>graph</h3>
					</div>
					<div className="section-2-btns">
						<div className="alt-btns-container">
							<div className="btn alt-btns">
								<h3>2nd</h3>
								<h3>mode</h3>
								<h3>del</h3>
							</div>
							<div className="btn alt-btns">
								<h3>alpha</h3>
								<h3>X,T,θ,n</h3>
								<h3>stat</h3>
							</div>
						</div>
						<div>hello there{/* arrows */}</div>
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default App;
