import React, { useState } from "react";

const Home = () => {
	const [glowColor, setGlowColor] = useState();
	const [newLight, setNewLight] = useState(false);

	const changeGlowColor = () => {
		const colors = newLight ? ['red', 'yellow', 'green', 'purple'] : ['red', 'yellow', 'green'];
		const currentIndex = colors.indexOf(glowColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setGlowColor(colors[nextIndex])
	}

	function PurpleLight() {
		return (
			<div className={`light bg-purple glow-${glowColor === 'purple' ? 'purple' : ''}`} onClick={() => setGlowColor('purple')}></div>
		)
	}

	const addNewLight = () => {
		setNewLight(true);
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<div className="sustainer bg-dark"></div>
			<div className="p-1 bg-dark rounded col-2 d-flex flex-column align-items-center" style={{width: '70px', height: newLight ? '207px' : '160px'}}>
				<div className={`light bg-danger glow-${glowColor === 'red' ? 'red' : ''} mb-1`} onClick={() => setGlowColor('red')}></div>
				<div className={`light bg-warning glow-${glowColor === 'yellow' ? 'yellow' : ''} mb-1`}  onClick={() => setGlowColor('yellow')}></div>
				<div className={`light bg-success glow-${glowColor === 'green' ? 'green' : ''} mb-1`} onClick={() => setGlowColor('green')}></div>
				{newLight && <PurpleLight />}
			</div>
			<div className="mt-5 d-flex">
				<button type="button" onClick={changeGlowColor} className="btn btn-dark me-3">Change Light</button>
				<button type="button" onClick={addNewLight} className="btn btn-purple">Add Purple</button>
			</div>
		</div>
	);
};

export default Home;
