'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
	title: string;
	body: string;
	author: { name: string; avatar: string };
	date: Date;
	slug: string;
	image: string;
}

const Card: FC<CardProps> = ({
	title,
	body,
	author,
	date,
	slug,
	image
}: CardProps) => {
	return (
		<Link
			href={`/post/${slug}`}
			className="w-fit h-[300px] bg-white rounded-lg text-black my-5">
			<div className="flex flex-row m-2">
				<Image
					className="p-2 rounded-full"
					src={author?.avatar || 'https://via.placeholder.com/150'}
					alt="placeholder"
					height={50}
					width={50}
				/>
				<div>
					<h2 className="font-bold">{author.name}</h2>
					<h2>{date.toString()}</h2>
				</div>
			</div>
			<hr className=" w-11/12 mx-auto" />
			<div className="m-4">
				<Image src={image} alt="Blog pic" height={200} width={200} />
				<h3 className=" text-2xl font-bold">{title}</h3>
				<h3>{body}</h3>
			</div>
		</Link>
	);
};

export default Card;
