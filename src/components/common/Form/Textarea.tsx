import clsx from 'clsx';
import { FC, TextareaHTMLAttributes } from 'react';
import { FormControl, FormControlProps } from './FormControl';
type Props = FormControlProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<Props> = ({ className, error, ...rest }) => {
	return (
		<FormControl isTextArea={true} error={error}>
			<textarea className={clsx('block w-full px-2 h-full rounded outline-none indent-2 pt-2', className)} {...rest} />
		</FormControl>
	);
};

export { Textarea };
