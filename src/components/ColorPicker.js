import Colors from "../Colors";
import Pixel from "./Pixel";

const ColorPicker = (props) => {
	return (
		<div className="colorpicker">
			{Colors.map((color, index) => {
				return <Pixel key={index} background={color} />;
			})}
		</div>
	);
};

export default ColorPicker;
