import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
	return (
		<div className="h-screen bg-black p-4">
			<Navbar />
			<Main />
			<Table />
		</div>
	);
}

export default App;
