import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const InputBox: FC<Props> = ({ id, label, ...rest }) => {
	return (
		<div className="input_box">
			{label && <label htmlFor={id}>{label}</label>}
			<input id={id} {...rest} />
		</div>
	);
};

export default InputBox;
