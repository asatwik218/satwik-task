"use client";

import React from "react";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/utils/firebase";
import Link from "next/link";

const LoginPage = () => {
	const signupwithGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const res = await signInWithPopup(auth, provider);
			console.log(res);
		} catch (error: any) {
			console.error(error.message);
		}
	};
	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<h1 className='text-2xl font-semibold '>Log into your account</h1>
			<h3 className='text-sm mb-14'>Choose a log in method</h3>
			<Button icon={<FcGoogle className='w-6 h-6' />} action={signupwithGoogle}>
				Log in with Google
			</Button>
			<Button icon={<MdEmail className='w-6 h-6' />} action={() => {}}>
				Log in with Email
			</Button>
			<p className='text-sm mt-14'>
				New here?{" "}
				<Link href="/signup">
					<span className='text-blue-400 ml-2 hover:underline hover:text-blue-500 hover:cursor-pointer'>
						Sign up
					</span>
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;
