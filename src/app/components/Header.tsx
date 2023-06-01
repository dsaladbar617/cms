import Link from 'next/link';
import { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className="w-full bg-slate-600 h-24">
			<div className="w-10/12 flex flex-row justify-between mx-auto p-3">
				<Link href="/">Blog</Link>
				<ul>
					<li>
						<Link href="/">HOME</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
