//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import propsType from "prop-types";

function Counter(props) {
	return (
		<div className="container d-flex justify-content-center">
			<div className="dig text-light">
				<i className="fa fa-clock" />
			</div>
			<div className="dig text-light">{props.sixthNum % 10}</div>
			<div className="dig text-light">{props.fifthNum % 10}</div>
			<div className="dig text-light">{props.fourthNum % 10}</div>
			<div className="dig text-light">{props.thirdNum % 10}</div>
			<div className="dig text-light">{props.secondNum % 10}</div>
			<div className="dig text-light">{props.firstNum % 10}</div>
		</div>
	);
}

Counter.propsType = {
	firstNum: propsType.number,
	secondNum: propsType.number,
	thirdNum: propsType.number,
	fourthNum: propsType.number,
	fifthNum: propsType.number,
	sixthNum: propsType.number,
};

let time = 0;

setInterval(() => {
	let first = Math.floor(time / 1);
	let second = Math.floor(time / 10);
	let third = Math.floor(time / 100);
	let fourth = Math.floor(time / 1000);
	let fifth = Math.floor(time / 10000);
	let sixth = Math.floor(time / 100000);
	time++;

	//render your react application
	ReactDOM.render(
		<Counter
			firstNum={first}
			secondNum={second}
			thirdNum={third}
			fourthNum={fourth}
			fifthNum={fifth}
			sixthNum={sixth}
		/>,
		document.querySelector("#app")
	);
}, 1000);
