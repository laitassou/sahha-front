import { FC } from 'react';
import { FormControl } from './FormControl';
import Select, { Props as ReactSelectProps } from 'react-select';
import { useField } from 'formik';

export type SelectFieldOption = {
	label: string;
	value: string;
};
interface Props extends ReactSelectProps<SelectFieldOption> {
	name: string;
}
const SelectField: FC<Props> = ({ options, name, onChange, onBlur, defaultValue, placeholder }) => {
	const [field, meta, helpers] = useField<string>(name);

	return (
		<FormControl error={meta.touched ? meta.error : ''}>
			<Select
				defaultValue={defaultValue}
				options={options}
				name={field.name}
				onChange={(option, actionMeta) => {
					if (option) {
						helpers.setValue(option.value);
					}
					if (onChange) {
						onChange(option, actionMeta);
					}
				}}
				styles={{
					control: (baseStyles) => ({
						...baseStyles,
						border: 'none',
						height: '100% !important',
						paddingLeft: '0.3125rem',
					}),
					container: (baseStyle) => ({
						...baseStyle,
						height: '100% !important',
					}),
				}}
				onBlur={(event) => {
					field.onBlur(event);
					helpers.setTouched(true);
					if (onBlur) {
						onBlur(event);
					}
				}}
				placeholder={placeholder}
			/>
		</FormControl>
	);
};

export { SelectField };
