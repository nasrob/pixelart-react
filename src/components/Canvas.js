import { Component, useState } from "react";
import Colors from "../Colors";
import Pixel from "./Pixel";

const Canvas = () => {
	const [matrix, setMatrix] = useState(
		Array(30)
			.fill()
			.map(() => Array(30).fill(0))
	);

	/**
	 *  iterate every row, and for each row iterate every column,
	 *  and return a Pixel component for every single element in the matrix
	 *
	 *  Tip: we’re not using the value returned by the map() function,
	 *  the second time I call it,
	 *  so I assign it the value _, to mean I don’t actually care about it.
	 *  It’s just a convention (which I borrowed from the Go programming language,
	 *  where _ actually means we ignore the parameter).
	 */
	return (
		<div className={"canvas"}>
			{matrix.map((row, rowIndex) =>
				row.map((_, colIndex) => {
					return (
						<Pixel
							key={`${rowIndex}-${colIndex}`}
							background={Colors[matrix[rowIndex][colIndex]]}
						/>
					);
				})
			)}
		</div>
	);
};

export default Canvas;
