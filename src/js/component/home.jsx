import React, { useState } from "react";

//create your first component
const Home = () => {
	const [glowColor, setGlowColor] = useState();

	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="sustainer bg-dark"></div>
			<div className="p-1 bg-dark rounded col-2 d-flex flex-column align-items-center" style={{width: '70px', height: '160px'}}>
				<div className={`light bg-danger glow-${glowColor === 'red' ? 'red' : ''} mb-1`} onClick={() => setGlowColor('red')}></div>
				<div className={`light bg-warning glow-${glowColor === 'yellow' ? 'yellow' : ''} mb-1`}  onClick={() => setGlowColor('yellow')}></div>
				<div className={`light bg-success glow-${glowColor === 'green' ? 'green' : ''}`} onClick={() => setGlowColor('green')}></div>
			</div>
		</div>
	);
};

export default Home;
