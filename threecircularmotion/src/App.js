import React from 'react';
import { Canvas } from 'react-three-fiber'
import './App.css';

import { BoxObj } from './BoxObj';
import BoxGroup from './BoxGroup';

function App() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<BoxObj position={[-1.2, 0, 0]} />
			<BoxObj position={[1.2, 0, 0]} />
			<BoxGroup />
		</Canvas>
	);
}

export default App;
