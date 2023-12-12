import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Carousel,
} from "@material-tailwind/react";

export default function ProjectItem({ data, imageToolShop, imageChopkin }) {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Card className="mt-6 w-96 bg-secondary">
				<CardHeader color="blue-gray" className="relative h-56">
					<img src={data.profileImage.home} alt="card-image" />
				</CardHeader>
				<CardBody>
					<Typography
						variant="h5"
						color="blue-gray"
						className="mb-2 text-primary"
					>
						{data.title}
					</Typography>
					<Typography className="text-primary">{data.detail}</Typography>
				</CardBody>
				<div className="grid grid-cols-3 justify-items-center gap-4">
					{data?.icons2?.html}
					{data?.icons2?.css}
					{data?.icons2?.javascript}
					{data?.icons?.react}
					{data?.icons?.node}
					{data?.icons?.express}
					{data?.icons?.tailwind}
				</div>

				<CardFooter className="pt-0">
					<button
						onClick={handleOpen}
						className="bg-third px-8 py-2 rounded-full text-third mt-6 w-full"
					>
						View
					</button>
				</CardFooter>
			</Card>

			{/* modal */}
			{data.title === "ToolShop App (Personal Project)" ? (
				<>
					<Dialog className="bg-secondary" open={open} handler={handleOpen}>
						<DialogHeader className=" text-secondary flex justify-center items-center">
							{data.title}
						</DialogHeader>
						<DialogBody className="">
							<Carousel autoplay={true} loop={true} className="rounded-xl">
								{imageToolShop.map((item, index) => (
									<div className="h-[400px]">
										<img
											key={index}
											src={item}
											alt={`image ${index + 1}`}
											className="h-full w-full object-contain"
										/>
									</div>
								))}
							</Carousel>
						</DialogBody>
						<DialogFooter>
							<Button
								variant="gradient"
								color="red"
								onClick={handleOpen}
								className="mr-1"
							>
								<span>Close</span>
							</Button>
						</DialogFooter>
					</Dialog>
				</>
			) : (
				<>
					<Dialog className="bg-secondary" open={open} handler={handleOpen}>
						<DialogHeader className=" text-secondary flex justify-center items-center">
							{data.title}
						</DialogHeader>
						<DialogBody className="">
							<Carousel autoplay={true} loop={true} className="rounded-xl">
								{imageChopkin.map((item, index) => (
									<div className="h-[400px]">
										<img
											key={index}
											src={item}
											alt={`image ${index + 1}`}
											className="h-full w-full object-contain"
										/>
									</div>
								))}
							</Carousel>
						</DialogBody>
						<DialogFooter>
							<Button
								variant="gradient"
								color="red"
								onClick={handleOpen}
								className="mr-1"
							>
								<span>Close</span>
							</Button>
						</DialogFooter>
					</Dialog>
				</>
			)}
		</>
	);
}
