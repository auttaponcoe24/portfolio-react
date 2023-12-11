import React from "react";
import Me2 from "../assets/imgs/Me2.jpg";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen bg-secondary py-2 px-[8%] flex justify-between items-center gap-4"
		>
			<div className="w-[350px] h-[500px] rounded-lg overflow-hidden shadow-xl shadow-red-600">
				<img src={Me2} alt="profile" className="w-full h-full object-cover" />
			</div>
			<div className="max-w-[60%] text-primary flex flex-col">
				<h1 className="text-2xl font-bold">
					About <span className="text-secondary">Me</span>
				</h1>
				<h3 className="font-bold text-xl">Full-Stack Developer</h3>
				<small className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda
					omnis hic asperiores. Magnam hic, maxime nam doloribus repellat vitae
					consequatur, dolor vero quo officiis esse nisi nulla iure enim!
				</small>
				<button className="bg-third self-start px-4 py-2 rounded-full text-third mt-6">
					Read More
				</button>
			</div>
		</section>
	);
}
