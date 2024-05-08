'use client'

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import {  User,signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { auth } from "@/utils/firebase";
import Link from "next/link";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";



const SignupPage = () => {
	const router = useRouter()
	const [user,setUser] = useState<User>()
	

	
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
			<div className='flex flex-col items-center justify-between '>
				<div >
				<h1 className="text-2xl font-semibold text-center ">Sign up</h1>
				<h3 className="text-sm mb-14 text-center">Choose a sign up method</h3>
				</div>
				<div>
        <Button icon={<FcGoogle className="w-6 h-6" />} action={handleSignupwithGoogle}>Sign up with Google</Button>
        <Button icon={<MdEmail className="w-6 h-6"/>} action={()=>router.push('/signup/email')}>Sign up with Email</Button>
				</div>
				<p className='text-sm mt-14'>
					Already a user? 
					<Link href="/login">
					<span className="text-blue-400 ml-2 hover:underline hover:text-blue-500 hover:cursor-pointer">Log in</span>
					</Link>
				</p>
			</div>
	);
};

export default SignupPage;
