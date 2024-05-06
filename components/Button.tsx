'use client'
import React from "react";

type Props = {
	icon: React.ReactNode;
	action: () => void;
	children: React.ReactNode;
};

const Button = ({ icon,action,children }: Props) => {
	return (
		<button
			onClick={action}
			className='bg-[#192734] hover:bg-[#071829] border-2 border-[#425568] rounded-lg flex items-center justify-center w-80 h-12 mb-3'
		>
			{icon}
			<span className="pl-2">{children}</span>
		</button>
	);
};

export default Button;
