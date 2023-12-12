import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
	const [active, setActive] = useState({
		home: false,
		about: false,
		project: false,
		contact: false,
	});

	return (
		<nav className="fixed top-0 left-0 w-full py-2 px-[8%] bg-primary flex justify-between items-center z-50 text-primary">
			<div className="text-3xl font-semibold cursor-default">Portfolio.</div>

			<FaBars size={20} className="hidden" />

			<ul className="flex gap-6 text-lg">
				<li
					onClick={() => setActive({ home: true })}
					className={`hover:text-secondary duration-300 ${
						active.home && "text-secondary"
					}`}
				>
					<a href="#home">Home</a>
				</li>
				<li
					onClick={() => setActive({ about: true })}
					className={`hover:text-secondary duration-300 ${
						active.about && "text-secondary"
					}`}
				>
					<a href="#about">About</a>
				</li>
				<li
					onClick={() => setActive({ project: true })}
					className={`hover:text-secondary duration-300 ${
						active.project && "text-secondary"
					}`}
				>
					<a href="#project">Projects</a>
				</li>
				<li
					onClick={() => setActive({ contact: true })}
					className={`hover:text-secondary duration-300 ${
						active.contact && "text-secondary"
					}`}
				>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
