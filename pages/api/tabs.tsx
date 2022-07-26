import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Character from './Character'

const startDate: Date = new Date('2021-01-11');
const differenceDate: Date = new Date(+new Date() - +startDate);

const Home = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Home page dolor sit amet</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight position={[1, 3, 2]}/>
                <OrbitControls/>
                <Suspense fallback={null}>
                    <Character/>
                </Suspense>
            </Canvas>
        </div>
    </div>
)

const About = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>About page dolor sit amet</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight/>
                <OrbitControls/>
                <Suspense fallback={null}>
                    <Character/>
                </Suspense>
            </Canvas>
        </div>
    </div>
)

const Portfolio = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Projects</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>     
            </div>
            <div className="home__welcome-projects">
                <h1>AirPort</h1>
                <span>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <span>This site... Lorem ipsum dolor sit amet</span>

                <h1>AirPort</h1>
                <span>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <span>This site... Lorem ipsum dolor sit amet</span>

                <h1>AirPort</h1>
                <span>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <span>This site... Lorem ipsum dolor sit amet</span>
                <button><a href="/#header">Back to top ↑</a></button>
            </div>
        </div>
    </div>
)

const Contact = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Contact me</h1>
                <Link href="https://vk.com/qwaqwakva"><a className="social__link" target="blank"><Image src="/vk.svg" alt="" width={20} height={20}/><span>VKontakte</span></a></Link>
                <Link href="https://t.me/qwaqwakwa"><a className="social__link" target="blank"><Image src="/telegram.svg" alt="" width={20} height={20}/><span>Telegram</span></a></Link>
                <Link href="https://github.com/Attato"><a className="social__link" target="blank"><Image src="/github.svg" alt="" width={20} height={20}/><span>GitHub</span></a></Link>
                <Link href="mailto:rde8519@mail.ru"><a className="social__link"><Image src="/email.svg" alt="" width={20} height={20}/><span>rde8519@mail.ru</span></a></Link>
                <p className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Canvas>
                <ambientLight/>
                <pointLight/>
                <OrbitControls/>
                <Suspense fallback={null}>
                    <Character/>
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