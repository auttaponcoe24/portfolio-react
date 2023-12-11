import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";

export default function ProjectItem({ data }) {
	return (
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
				<button className="bg-third px-8 py-2 rounded-full text-third mt-6 w-full">
					View
				</button>
			</CardFooter>
		</Card>
	);
}
