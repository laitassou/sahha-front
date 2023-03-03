const ServiceSingle = ({ title, icon, children }) => {
	return (
		<div className="w-full pb-4 pr-4 lg:w-1/3 xl:w-1/4 group">
			<div className="h-full p-6 border-2 border-dashed rounded-xl ">
				<div className="box-content w-10 h-10 p-4 mb-4 transition rounded shadow-lg text-primary-500 group-even:text-secondary-500 group-hover:-translate-y-2">
					{icon}
				</div>
				<h3 className="mb-4 text-2xl font-bold">{title}</h3>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default ServiceSingle;
