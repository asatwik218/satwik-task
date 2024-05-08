"use client";
import Card from "@/components/Card";
import CarouselContainer from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import { auth } from "@/utils/firebase";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
	const router = useRouter();
	// useEffect(() => {
	// 	if (!auth.currentUser) {
	// 		router.replace("/login");
	// 	}
	// }, [router]);

	return (
		<>
			<Navbar />
			<main className='main-content'>
				<CarouselContainer />
			</main>
		</>
	);
}
