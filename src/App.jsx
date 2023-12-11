import { Button } from "@material-tailwind/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="">
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
