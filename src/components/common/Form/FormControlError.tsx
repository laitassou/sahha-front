import { FC, PropsWithChildren } from 'react';

const FormControlError: FC<PropsWithChildren> = ({ children }) => {
	return <small className="mt-2 font-semibold text-red-400">{children}</small>;
};

export { FormControlError };
