import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

import homepage from "../assets/imgs/toolShop/homepage.png";

export const data = [
	{
		id: 1,
		title: "ToolShop App (Personal Project)",
		detail:
			"Web Application for people who's seeking for Equipment, tools, mechanic",
		language: "HTML, CSS, JavaScript, MySQL",
		tech: "React, Nodejs, Express, Tailwind CSS, Prisma ORM",
		profileImage: { home: homepage },
		icons: {
			react: <FaReact className="text-light-blue-600" size={40} />,
			node: <FaNodeJs className="text-green-600" size={40} />,
			express: <SiExpress className="text-deep-purple-600" size={40} />,
			tailwind: <SiTailwindcss className="text-light-blue-600" size={40} />,
		},
		icons2: {
			html: <FaHtml5 className="text-red-600" size={40} />,
			css: <FaCss3Alt className="text-light-blue-600" size={40} />,
			javascript: <SiJavascript className="text-yellow-600" size={40} />,
		},
	},
	{
		id: 2,
		title: "ChopKin App (Group Project)",
		detail:
			"Web Application for people who's seeking for restaurant location and booking restaurant",
		language: "HTML, CSS, JavaScript, MySQL",
		tech: "React, Nodejs, Express, Tailwind CSS, Prisma ORM, Google Map, Socket.io",
		profileImage: "/src/assets/imgs/toolShop/homepage.png",
		icons: {
			react: <FaReact className="text-light-blue-600" size={40} />,
			node: <FaNodeJs className="text-green-600" size={40} />,
			express: <SiExpress className="text-deep-purple-600" size={40} />,
			tailwind: <SiTailwindcss className="text-light-blue-600" size={40} />,
		},
		icons2: {
			html: <FaHtml5 className="text-red-600" size={40} />,
			css: <FaCss3Alt className="text-light-blue-600" size={40} />,
			javascript: <SiJavascript className="text-yellow-600" size={40} />,
		},
	},
];
