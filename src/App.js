import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
	const [color, setColor] = useState(0);

	return (
		<div className="App">
			<ColorPicker
				currentColor={color}
				setColor={(color) => setColor(color)}
			/>
			<Canvas />
		</div>
	);
}

export default App;
