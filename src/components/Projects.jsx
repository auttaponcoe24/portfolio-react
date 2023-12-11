import React from "react";
import ProjectItem from "./ProjectItem";

import homepage from "../assets/imgs/toolShop/homepage.png";

import { data } from "../data/mockProject";

export default function Projects() {
	console.log("first =>", data);

	return (
		<section
			id="project"
			className="min-h-screen bg-primary py-2 px-[8%] flex items-center"
		>
			<div className="flex flex-col items-center justify-center gap-10 mx-auto">
				<h1 className="text-3xl text-primary font-bold">Projects</h1>
				<div className="grid grid-cols-2 gap-4">
					{/* <div className="col-span-1">
						<ProjectItem src={homepage} title={`test`} />
					</div>
					<div className="col-span-1">
						<ProjectItem />
					</div> */}
					{data.map((item, index) => (
						<div key={item.id} className="col-span-1">
							<ProjectItem data={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
