import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className=" text-center sticky top-[100vh]">
			<a href="#">Courses</a>
			{' | '}
			<a href="#">Github</a>
			{' | '}
			<a href="#">Facebook</a>
		</div>
	);
};

export default Footer;
