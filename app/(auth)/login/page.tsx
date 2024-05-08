"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "@/utils/firebase";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

const LoginPage = () => {
	const [user,setUser] = useState<User>()

	const router = useRouter();

	const handleSignupwithGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const res = await signInWithPopup(auth, provider);
			setUser(res.user);
			console.log(res);
			toast.success('Sign up successful!')
			router.push('/')
		} catch (error:any) {
			console.error(error.message);
			toast.error('Something went wrong!')
		}
	}

	return (
		<div className='flex flex-col items-center justify-center gap-2'>
			<h1 className='text-2xl font-semibold '>Log into your account</h1>
			<h3 className='text-sm mb-14'>Choose a log in method</h3>
			<Button icon={<FcGoogle className='w-6 h-6' />} action={handleSignupwithGoogle}>
				Log in with Google
			</Button>
			<Button icon={<MdEmail className='w-6 h-6' />} action={() => router.push('/login/email')}>
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
