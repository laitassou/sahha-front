import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { FormControl, FormControlProps } from './FormControl';
type Props = FormControlProps & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({ className, error, ...rest }) => {
	return (
		<FormControl error={error}>
			<input className={clsx('w-full px-2 h-full rounded outline-none indent-2 ', className)} {...rest} />
		</FormControl>
	);
};

export { Input };
