import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<>
			<Header title="The Job Board" />
			<Jobs />
			<Footer name="Antoine SOLIVERES" />
		</>
	);
};

export default App;
