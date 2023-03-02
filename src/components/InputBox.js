import React from 'react';

function InputBox(props) {
	return (
		<div className="input_box">
			<label htmlFor={props.for}>{props.label}</label>
			<input
				className={props.class}
				type={props.type}
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
}

export default InputBox;
