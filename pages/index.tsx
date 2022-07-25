import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import { tabs } from './api/tabs'
import { motion } from 'framer-motion';

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
						className={isActive ? "hover" : ""}
					>	
						{title}
						{isActive ? <motion.div className="underline" layoutId="underline"/> : null}
					</a>
					);
				})}
			</div>
			<>
				<div className="menu__sticky__wrap">
					<div className="menu__button__wrap">									
						
					</div> 
				</div>	
				<motion.div
					key={page}					
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0 }}						
				>								
					{tabs[page].wrap}
				</motion.div>				
			</>
			
			<Footer />
        </motion.div>
	);
};

export default Home;

