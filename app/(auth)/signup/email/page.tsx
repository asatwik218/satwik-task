"use client";
import Button from "@/components/Button";
import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";

type Props = {};

const SignupWithEmailPage = (props: Props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const router = useRouter()

	const handleSignupWithEmail = async() => {
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

		try {
      // const user  = auth.currentUser;
      // if(user){
      //   await signOut(auth);
      // }

			if (emailPattern.test(email)) {
				if (passwordPattern.test(password)) {
					const res = await createUserWithEmailAndPassword(auth, email, password);
					console.log(res);
          toast.success("Sign up successful!");
          router.push('/');

				} else {
					toast.error(
						"Password must be at least 8 characters long and contain at least one number, one upercase letter, one lowercase letter and 1 special character"
					);
				}
			} else {
				toast.error("Please enter a valid email address");
			}
		} catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          toast.error(`Email address ${email} already in use. Please Login instead.`);
          break;
        case 'auth/invalid-email':
          toast.error(`Email address ${email} is invalid.`);
          break;
        case 'auth/operation-not-allowed':
          toast.error(`Error during sign up.`);
          break;
        case 'auth/weak-password':
          toast.error('Password is not strong enough. Add additional characters including special characters and numbers.');
          break;
        default:
          toast.error("something went wrong!");
          break;
      }

		}
	};

  useEffect(()=>{
    const user = auth.currentUser;
    if(user){
      console.log(user)
      signOut(auth);
    }
  },[])

	return (
		<div className='flex flex-col items-center justify-between '>
			<h1 className='text-2xl font-semibold text-center mb-14 '>Sign up</h1>
			<div className='flex flex-col'>
				<input
					className='focus:outline-none focus:border-white'
					placeholder='Email'
					type='email'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					className='focus:outline-none focus:border-white'
					type='password'
					placeholder='Password'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div className='mt-14 '>
				<Button
					action={handleSignupWithEmail}
					icon={<MdEmail className='h-6 w-6' />}
				>
					Sign up
				</Button>
				<p className='text-sm text-center'>
					Already a user?
					<Link href='/login'>
						<span className='text-blue-400 ml-2 hover:underline hover:text-blue-500 hover:cursor-pointer'>
							Log in
						</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignupWithEmailPage;
