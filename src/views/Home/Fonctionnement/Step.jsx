const Step = ({ number, text }) => {
	return (
		<div className="relative flex p-4 mb-2 transition duration-300 border border-transparent rounded-lg cursor-pointer last-of-type:mb-0 hover:bg-white md:-translate-x-5 hover:border-primary-500/20">
			<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-5 text-white rounded-full bg-secondary-500">
				{number}
			</div>
			<p className="max-w-md">{text}</p>
		</div>
	);
};

export default Step;
