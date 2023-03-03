import React from 'react';

const Step = ({ number, text }) => {
	return (
		<div className="flex items-center p-4 mb-2 -translate-x-5 border border-transparent rounded-lg cursor-pointer hover:border-primary-500/20">
			<div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white rounded-full bg-secondary-500">
				{number}
			</div>
			<p className="max-w-md">{text}</p>
		</div>
	);
};

export default Step;
