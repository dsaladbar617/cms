import { FC } from 'react';
import Image from 'next/image';

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
	return (
		<div className=" w-9/12 bg-white rounded-lg text-black my-5">
			<div className="flex flex-row m-2">
				<Image
					className="p-2 rounded-full"
					src="https://via.placeholder.com/150"
					alt="placeholder"
					height={50}
					width={50}
				/>
				<div>
					<h2 className="font-bold">Author</h2>
					<h2>Date</h2>
				</div>
			</div>
			<hr className=" w-11/12 mx-auto" />
			<div className="m-4">
				<h3 className=" text-2xl font-bold">Title</h3>
				<h3>Body</h3>
			</div>
		</div>
	);
};

export default Card;
