const Job = (props) => {
	const { className, title, contractType, country, city } = props;

	return (
		<>
			<div className={`item ${className}`}>
				<h2>{title}</h2>
				<div className="info">
					<p>{contractType} </p>
					<p>- {country} -</p>
					<p> {city}</p>
				</div>
			</div>
		</>
	);
};

export default Job;
