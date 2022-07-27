import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Character from './Character'

const birthday: Date = new Date('2002-09-30')
const dateOfBecoming: Date = new Date('2021-01-11');
const betweenBirthday: Date = new Date(+new Date() - +birthday);
const betweenBecoming: Date = new Date(+new Date() - +dateOfBecoming);


const Home = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Home page</h1>
                <span>Hello! You are on the main page of my current projects repository. After you play with the 3d model, you can go to the next page using the tabs on top.</span>
                <p className="date">Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
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

const About = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Page about me</h1>
                <span>I am {((+betweenBirthday.toISOString().slice(0, 4) - 1970))} years old.</span>
                <p className="date">Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
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
        <div className="row__projects">

            <div className="project">
                <h1>
                    <span id="prj1" className="setup_anchor"></span>
                    <a href="#prj1">Lorem</a>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <p>This site... Lorem ipsum dolor sit amet</p>
            </div>
            
            <div className="project">
                <h1>
                    <span id="prj2" className="setup_anchor"></span>
                    <a href="#prj2">Lorem</a>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <p>This site... Lorem ipsum dolor sit amet</p>
            </div>
            
            <div className="project">
                <h1>
                    <span id="prj3" className="setup_anchor"></span>
                    <a href="#prj3">Lorem</a>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>This site... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                    
                <Image src="/airport.jpg" width={650} height={370} /> 
                <p>This site... Lorem ipsum dolor sit amet</p>
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

                <div className="contact__links">
                    <div className="contact__block">
                        <Link href="https://vk.com/qwaqwakva"><a className="social__link" target="blank"><Image src="/vk.svg" alt="" width={20} height={20}/><span>VKontakte</span></a></Link>
                        <Link href="https://t.me/qwaqwakwa"><a className="social__link" target="blank"><Image src="/telegram.svg" alt="" width={20} height={20}/><span>Telegram</span></a></Link>
                    </div>

                    <div className="contact__block">
                        <Link href="https://github.com/Attato"><a className="social__link" target="blank"><Image src="/github.svg" alt="" width={20} height={20}/><span>GitHub</span></a></Link>
                        <Link href="mailto:rde8519@mail.ru"><a className="social__link"><Image src="/email.svg" alt="" width={20} height={20}/><span>Mцail</span></a></Link>
                    </div>
                </div>

                <p className="date">Frontend developer: {((+betweenBecoming.toISOString().slice(0, 4) - 1970) + "y " + (betweenBecoming.getMonth()) + "m " + betweenBecoming.getDate() + "d.")}</p>
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