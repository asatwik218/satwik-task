"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	b7: {
		breakpoint: { max: 4000, min: 2000 },
		items: 3,
		partialVisibilityGutter: 100,
	},
	b6: {
		breakpoint: { max: 2000, min: 1130 },
		items: 3,
		partialVisibilityGutter: 40,
	},
	b5: {
		breakpoint: { max: 1130, min: 940 },
		items: 2,
		partialVisibilityGutter: 100,
	},
	b4: {
		breakpoint: { max: 940, min: 750 },
		items: 2,
	},
	b3: {
		breakpoint: { max: 750, min: 675 },
		items: 1,
		partialVisibilityGutter: 300,
	},
	b2: {
		breakpoint: { max: 675, min: 464 },
		items: 1,
		partialVisibilityGutter: 200,
	},
	b1: {
		breakpoint: { max: 464, min: 350 },
		items: 1,
		partialVisibilityGutter: 100,
	},
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
	const {
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className='flex justify-between my-8 pl-6 pr-20 items-center '>
			<h1 className='text-xl'>
				Popular Topics <span>🔥</span>
			</h1>
			<div className='flex carousel-btn'>
				<button
					className='border rounded-md p-2 m-2 '
					onClick={() => previous()}
				>
					<FaArrowLeft />
				</button>
				<button className='border rounded-md p-2 m-2' onClick={() => next()}>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
};

const CarouselContainer = () => {
	return (
		<div className='carousel '>
			<Carousel
				responsive={responsive}
				arrows={false}
				renderButtonGroupOutside={true}
				customButtonGroup={<ButtonGroup />}
				draggable
				partialVisbile
				itemClass='carousel-item mx-2'
			>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Carousel>
		</div>
	);
};

// const CarouselContainer = () => {
// 	const [width, setWidth] = useState(0);

// 	const carouselRef = useRef<HTMLDivElement | null>(null);

// 	const [scrollX, setScrollX] = useState(0);

// 	useEffect(() => {
// 		if (carouselRef.current) {
// 			setWidth(
// 				carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
// 			);
// 		}
// 	}, []);

// 	const handleLeftClick = () => {
// 		if (scrollX - scrollAmt >= 0) {
// 			setScrollX(scrollX - scrollAmt); // Adjust the scroll distance as needed
// 		} else {
// 			setScrollX(0);
// 		}
// 	};

// 	const handleRightClick = () => {
// 		if (scrollX < width) {
// 			setScrollX(scrollX + scrollAmt); // Adjust the scroll distance as needed
// 		}
// 	};

// 	return (
// 		<div className=' md:ml-20 '>
// 			<div className='flex justify-between my-8 pl-6 pr-20 items-center '>
// 				<h1 className='text-xl'>
// 					Popular Topics <span>🔥</span>
// 				</h1>
// 				<div className='flex carousel-btn'>
// 					<button
// 						className='border rounded-md p-2 m-2 '
// 						onClick={handleLeftClick}
// 					>
// 						<FaArrowLeft />
// 					</button>
// 					<button
// 						className='border rounded-md p-2 m-2'
// 						onClick={handleRightClick}
// 					>
// 						<FaArrowRight />
// 					</button>
// 				</div>
// 			</div>
// 			<motion.div
// 				ref={carouselRef}
// 				className='carousel '
// 				whileTap={{ cursor: "grabbing" }}
// 			>
// 				<motion.div
// 					className='inner-carousel'
// 					style={{ translateX: `-${scrollX}px` }}
// 				>
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 				</motion.div>
// 			</motion.div>
// 		</div>
// 	);
// };

export default CarouselContainer;
