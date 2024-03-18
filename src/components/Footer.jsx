const Footer = (props) => {
	return (
		<>
			<footer>
				<p>
					Made with <span>React</span> at{" "}
					<a href="https://www.lereacteur.io/" target="_blank">
						Le Reacteur
					</a>{" "}
					by{" "}
					<a
						href="https://www.linkedin.com/in/antoine-soliveres-396811a4"
						target="_blank">
						{props.name}
					</a>
				</p>
			</footer>
		</>
	);
};

export default Footer;
