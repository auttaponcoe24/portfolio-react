import React from "react";
import { Input, Textarea } from "@material-tailwind/react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="min-h-screen bg-primary py-2 px-[8%] flex items-center"
		>
			<div className="mx-auto">
				<h1 className="py-4 text-4xl font-bold text-center text-primary">
					Contact <span className="text-secondary">Me</span>
				</h1>
				<form className="mt-6">
					<div className=" gap-4 w-full py-2">
						<div className="flex flex-col items-center justify-center gap-4">
							<div className="w-96">
								<Input
									label="Your name"
									color="amber"
									className="text-primary"
								/>
							</div>
							<div className="w-96">
								<Input
									label="Email Address"
									color="amber"
									className="text-primary"
								/>
							</div>
							<div className="w-96">
								<Textarea
									label="Message"
									color="amber"
									className="text-primary"
								/>
							</div>
						</div>
					</div>
					<button className="bg-third text-third w-full mt-4 py-2 rounded-lg">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
