import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { betweenBecoming } from './date'

const Home = (
    <div className="body" key={Date.now()}>

        <Head>
            <title>Home Page</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="body__column-wrap">

            <div className="assistance">
                <div className="assistance__row">
                    <Image src="/mouse_left.svg" alt="" width={20} height={20}/>
                    <p>- Rotate</p>
                </div>

                <div className="assistance__row">
                    <Image src="/mouse_right.svg" alt="" width={20} height={20}/>
                    <p>- Grab</p>
                </div>
            </div>

            <div className="home__welcome-info">
                <p>Hello! Welcome to my portfolio. In this place you can learn something about me and my projects.</p>
                <p>Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
            </div>
            
            <div className="section">
                <h3>Work</h3>
                <p>Attato is a front-end developer from St.Petersburg who is passionate about creating design and logic for developed applications.</p>
            </div>

            <div className="section">
                    <h3>Bio</h3>
                <div className="section__row">
                    <span>2002</span><p>Born in Russian: Mineralnye Vody (Min-Vody).</p>
                </div>

                <div className="section__row">
                    <span>2020</span><p>Introduction to front-end development.</p>
                </div>

                <div className="section__row">
                    <span>2023</span><p>Сollege graduation.</p>
                </div>
            </div>

            <div className="button__section">
                <button>Next page <Image src="/arrow.svg" width="16" height="16" alt="Next page"/></button>
            </div>         
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

        <div className="body__column-wrap">
            <div className="home__welcome-info">
                <h1>Page about me</h1>
                <p>I have experience in Frontend development, <br/> I mainly develop applications myself. <br/> I have experience with Vue, but I enjoy developing React with TypeScript.</p>
                <p className="read__more">Read More <Image src="/arrow.svg" alt="" width={16} height={16} /></p>
            </div>
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

        <div className="body__column-wrap">
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
        </div>
    </div>
)

export const tabs = [
    { title: "Home", wrap: [Home]},
    { title: "About", wrap: [About]},
    { title: "Portfolio", wrap: [Portfolio]},
    { title: "Contact", wrap: [Contact]}
];
