import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import {tabs} from './api/tabs'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const variants = {
	enter: () => {
		return {
			x: -1000,
			opacity: 0
		};
	},
	center: {
		x: 0,
		opacity: 1
	},
	exit: () => {
		return {
			x: -1000,
			opacity: 0
		};
	}
};

const Home = () => {

	const [[page], setPage] = useState([0, 0]);

	return (
		<motion.div initial="hidden" whileInView="visible">
			<Head>
                <title>Главная</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


			<Header />
			<div className="sub">
				{tabs.map(({ title }, i) => {
					const isActive = i === page;
					return (
					<a
						key={i}
						onClick={() => {
						setPage([i, i - page]);
						}}
						className={isActive ? "blue" : ""}
					>	
						{title}
						{isActive ? <motion.div className="underline" layoutId="underline"/> : null}
					</a>
					);
				})}
			</div>

            <div className="body">
				<>
					<div className="menu__sticky__wrap">
						<div className="menu__button__wrap">									
							
						</div> 
					</div>	
					<motion.div
						key={page}					
						variants={variants}
						initial="enter"
						animate="center"							
						transition={{
						x: { type: "spring", stiffness: 300, damping: 30, duration: 2 },
						opacity: { duration: 0.2 }
						}}								
					>								
						{tabs[page].wrap}
					</motion.div>				
				</>
			</div>
			<Footer />
        </motion.div>
	);
};

export default Home;

