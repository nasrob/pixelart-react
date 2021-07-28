import "./App.css";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";

function App() {
	return (
		<div className="App">
			<ColorPicker />
			<Canvas />
		</div>
	);
}

export default App;
