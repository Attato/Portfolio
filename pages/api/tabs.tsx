import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { betweenBecoming } from './date'
import DefaultMe from './meDefault'

const Home = (
    <div className="body" key={Date.now()}>

        <Head>
            <title>Home Page</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Home page</h1>
                <span>Hello! Welcome to my portfolio. In this place you can learn something about me and my projects.</span>
                <p className="date">Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight/>
                <OrbitControls enableZoom={false} rotateSpeed={0.7} />
                <Suspense fallback={null}>
                    <DefaultMe/>
                </Suspense>
            </Canvas>
        </div>
    </div>
)

const About = (
    <div className="body" key={Date.now()}>
        
        <Head>
            <title>About me</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Page about me</h1>
                <span>I have experience in Frontend development, I mainly develop applications myself. I have experience with Vue, but I enjoy developing React with TypeScript.</span>
                <span className="read__more">Read More <Image src="/arrow.svg" alt="" width={16} height={16} /></span>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight/>
                <OrbitControls enableZoom={false} rotateSpeed={0.7} />
                <Suspense fallback={null}>
                    <DefaultMe/>
                </Suspense>
            </Canvas>
        </div>
    </div>
)

const Portfolio = (
    <div className="body" key={Date.now()}>

        <Head>
            <title>Portfolio</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="row__projects">
            
            <div className="project">
                <h1>
                    <span id="prj1" className="setup_anchor"></span>
                    <Link href="#prj1"><a>Lorem</a></Link>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <a href="https://github.com/Attato/AirTickets" target="blank"><Image src="/null.png" alt="" width={690} height={370}/></a>
                <p>This site... Lorem ipsum dolor sit amet <a href="https://koffemeow.github.io/AirTickets">https://koffemeow.github.io/AirTickets</a></p>
            </div>
            
            <div className="project">
                <h1>
                    <span id="miniApps" className="setup_anchor"></span>
                    <Link href="#miniApps"><a>Mini apps</a></Link>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <a href="https://mini-apps-attato.vercel.app/" target="blank"><Image src="/mini_games.png" alt="" width={690} height={370}/></a>
                <p>This site... Lorem ipsum dolor sit amet <a href="https://koffemeow.github.io/AirTickets">https://koffemeow.github.io/AirTickets</a></p>
            </div>

            <div className="project">
                <h1>
                    <span id="miniGames" className="setup_anchor"></span>
                    <Link href="#miniGames"><a>Mini games</a></Link>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <Link href="https://mini-games-attato.vercel.app/" target="blank"><a><Image src="/mini_games.png" alt="" width={690} height={370}/></a></Link>
                <p>This site... Lorem ipsum dolor sit amet <Link href="https://koffemeow.github.io/AirTickets"><a>https://koffemeow.github.io/AirTickets</a></Link></p>
                <button><Link href="/#header"><a>Back to top ↑</a></Link></button>
            </div>
        </div>
    </div>
)

const Contact = (
    <div className="body" key={Date.now()}>

        <Head>
            <title>Contact</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Contact me</h1>

                <div className="contact__links">
                    <div className="contact__block">
                        <Link href="https://vk.com/qwaqwakva"><a className="social__link" target="blank"><Image src="/vk.svg" alt="" width={20} height={20}/><span>VKontakte</span></a></Link>
                        <Link href="https://t.me/qwaqwakwa"><a className="social__link" target="blank"><Image src="/telegram.svg" alt="" width={20} height={20}/><span>Telegram</span></a></Link>
                    </div>

                    <div className="contact__block">
                        <Link href="https://github.com/Attato"><a className="social__link" target="blank"><Image src="/github.svg" alt="" width={20} height={20}/><span>GitHub</span></a></Link>
                        <Link href="mailto:rde8519@mail.ru"><a className="social__link"><Image src="/email.svg" alt="" width={20} height={20}/><span>Mail</span></a></Link>
                    </div>
                </div>

                <p className="date">Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight/>
                <OrbitControls enableZoom={false} rotateSpeed={0.7} />
                <Suspense fallback={null}>
                    <DefaultMe/>
                </Suspense>
            </Canvas>
        </div>
    </div>
)

export const tabs = [
    { title: "Home", wrap: [Home]},
    { title: "About", wrap: [About]},
    { title: "Portfolio", wrap: [Portfolio]},
    { title: "Contact", wrap: [Contact]}
];