import React, { Suspense } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

const startDate: Date = new Date('2021-01-11');
const differenceDate: Date = new Date(+new Date() - +startDate);

const Character = () => {
	return(
		<>
			<OrbitControls target={[0, 0.30, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault fov={20} position={[3, 2, 5]} />

			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshBasicMaterial color={"white"} />
			</mesh>
		</>
	);
}

const Home = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Home page dolor sit amet</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p  className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Suspense fallback={null}>
                <Canvas className="canvas" shadows>
                    <Character/>
                </Canvas>
            </Suspense>
        </div>
    </div>
)

const About = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>About page dolor sit amet</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p  className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Suspense fallback={null}>
                <Canvas className="canvas" shadows>
                    <Character/>
                </Canvas>
            </Suspense>
        </div>
    </div>
)

const Portfolio = (
    <div className="body" key={Date.now()}>
        <div className="home__welcome">
            <div className="home__welcome-info">
                <h1>Projects</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p  className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>     
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
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <p  className="date">Frontend developer: {((+differenceDate.toISOString().slice(0, 4) - 1970) + "y " + (differenceDate.getMonth()) + "m " + differenceDate.getDate() + "d.")}</p>
            </div>

            <Suspense fallback={null}>
                <Canvas className="canvas" shadows>
                    <Character/>
                </Canvas>
            </Suspense>
        </div>
    </div>
)

export const tabs = [
    { title: "Home", wrap: [Home]},
    { title: "About", wrap: [About]},
    { title: "Portfolio", wrap: [Portfolio]},
    { title: "Contact", wrap: [Contact]}
];