import { useState } from "react";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
	const [active, setActive] = useState({
		home: false,
		about: false,
		project: false,
		contact: false,
	});

	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className=" sticky top-0 left-0  py-2 px-[8%] bg-primary flex justify-between items-center z-40 text-primary">
			<div className="text-3xl font-semibold cursor-default">Portfolio.</div>

			{nav ? (
				<>
					<IoMdClose
						onClick={handleNav}
						size={25}
						className="absolute top-4 right-4 z-[99] md:hidden"
					/>
				</>
			) : (
				<>
					<FaBars
						onClick={handleNav}
						size={20}
						className="absolute top-4 right-4 z-[99] md:hidden"
					/>
				</>
			)}

			{nav ? (
				<div className="fixed w-full top-0 left-0 h-screen bg-secondary flex flex-col justify-center items-center z-20">
					<a
						onClick={handleNav}
						href="#home"
						className="w-[75%] text-third flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineHome size={20} />
						<span className="pl-4">Home</span>
					</a>
					<a
						onClick={handleNav}
						href="#about"
						className="w-[75%] text-third flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<GrProjects size={20} />
						<span className="pl-4">About</span>
					</a>
					<a
						onClick={handleNav}
						href="#project"
						className="w-[75%] text-third flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineProject size={20} />
						<span className="pl-4">Projects</span>
					</a>

					<a
						onClick={handleNav}
						href="#contact"
						className="w-[75%] text-third flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineMail size={20} />
						<span className="pl-4">Contact</span>
					</a>
				</div>
			) : (
				""
			)}

			<ul className="hidden md:flex gap-6 text-lg">
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
