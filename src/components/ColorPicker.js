import Colors from "../Colors";
import Pixel from "./Pixel";

const ColorPicker = (props) => {
	return (
		<div className="colorpicker">
			{Colors.map((color, index) => {
				return (
					<Pixel
						onClick={(e) => props.setColor(index)}
						key={index}
						background={color}
						current={Colors[props.currentColor] === color} // current prop that’s either true or false
					/>
				);
			})}
		</div>
	);
};

export default ColorPicker;
