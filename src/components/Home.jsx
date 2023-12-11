import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
	FaGithub,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

import Me from "../assets/imgs/Me.jpeg";

export default function Home() {
	return (
		<section
			id="home"
			className="min-h-screen bg-primary py-2 px-[8%] flex justify-between items-center"
		>
			<div className="flex flex-col max-w-[60%] ">
				<h3 className="text-2xl font-bold text-primary">Hello, It's Me</h3>
				<h1 className="text-5xl font-bold text-primary mt-4">
					Auttapon Chucheun
				</h1>
				<h3 className="text-2xl font-bold text-primary">
					And I'm a{" "}
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							"Full-Stack Developer",
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							"&",
							1000,
							"Front-End Developer",
							1000,
						]}
						wrapper="span"
						speed={50}
						style={{ fontSize: "1em", display: "inline-block" }}
						repeat={Infinity}
						className="text-secondary"
					/>
				</h3>
				<small className="font-bold text-primary mt-4">
					I’m looking for a Full stack web developer position. i’m always
					energetic and eager to learn new skills. i’m a friendly, helpful and
					polite person so I can merge into any working environment.
				</small>

				<div className="flex justify-evenly mt-6 max-w-[200px] w-full">
					<div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center duration-300 ease-in hover:scale-125">
						<a
							href="https://github.com/auttaponcoe24"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={20} className="cursor-pointer text-secondary" />
						</a>
					</div>

					<div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center duration-300 ease-in hover:scale-125">
						<a
							href="https://facebook.com/neungcoe24/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookF
								size={20}
								className="cursor-pointer text-secondary"
							/>
						</a>
					</div>
					<div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center duration-300 ease-in hover:scale-125">
						<a
							href="https://www.instagram.com/neung.auttapon/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram
								size={20}
								className="cursor-pointer text-secondary"
							/>
						</a>
					</div>
					<div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center duration-300 ease-in hover:scale-125">
						<a
							href="https://linkedin.com/in/auttapon-chucheun-034668297"
							target="_blank"
						>
							<FaLinkedinIn
								size={20}
								className="cursor-pointer text-secondary"
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg shadow-red-600">
				<img src={Me} alt="profile" className="w-full h-full object-cover" />
			</div>
		</section>
	);
}
