import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
	return (
		<div className="absolute h-screen w-screen bg-gray">
			<body className="absolute h-screen w-screen bg-seeThrough text-white flex justify-center items-center text-6xl">Coming soon!</body>
				<div className="h-screen bg-black p-4">
					<Navbar />
					<Main />
					<Table />
				</div>
		</div>
	);
}

export default App;
