import React from "react";
import Me2 from "../assets/imgs/Me2.jpg";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen bg-secondary py-2 px-[8%] flex justify-center md:justify-between items-center md:gap-4"
		>
			<div className="hidden md:flex w-[350px] h-[500px] rounded-lg overflow-hidden shadow-xl shadow-red-600">
				<img src={Me2} alt="profile" className="w-full h-full object-cover" />
			</div>
			<div className="max-w-[100%] md:max-w-[60%] text-primary flex flex-col gap-4 md:gap-0">
				<h1 className="text-5xl md:text-2xl font-bold">
					About <span className="text-secondary">Me</span>
				</h1>
				<h3 className="font-bold text-2xl md:text-xl">Full-Stack Developer</h3>
				<small className="mt-4 text-lg md:text-sm">
					My name is Auttapon Chucheun. I graduated with a bachelor's degree
					from the faculty of engineering major in computer Engineer at Prince
					of Songkhla University. I have got 1 year of experience from Point IT
					Company in the position of system engineer.
				</small>
				<button className="bg-third self-start px-4 py-2 rounded-full text-third mt-6">
					<a
						href="https://drive.google.com/file/d/1m3O8xpSOb1Kl2iVi6pxE6gOnBi6eh4F3/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Download Resume
					</a>
				</button>
			</div>
		</section>
	);
}
