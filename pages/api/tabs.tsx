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
                <button><Link href="/#header"><a>Back to top<Image src="/arrow.svg" width="16" height="16" alt="Next page"/></a></Link></button>
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
                <h3>About me</h3>
                <p>I have experience with Vue, but I enjoy developing React with TypeScript.</p>
            </div>

            <div className="section">
                <h3>About project</h3>

                <span>Open <code className="inline">`package.json`</code> and look at the contents of the <code className="inline">`scripts`</code>:</span>

                <pre className="pre_language_json">
                    <code className="code_language_json">
                        <span className="token_property">&quot;scripts&quot;</span>
                        <span className="token_operator">: </span> 
                        <span className="token_punctuation">&#123;<br /></span>
                        <div className="token_space">
                            <span className="token_property">&quot;dev&quot;</span>
                            <span className="token_operator">: </span> 
                            <span className="token_string">&quot;next dev&quot;</span>
                            <span className="token_punctuation">,<br /></span>
                            <span className="token_property">&quot;build&quot;</span>
                            <span className="token_operator">: </span> 
                            <span className="token_string">&quot;next build&quot;</span>
                            <span className="token_punctuation">,<br /></span>
                            <span className="token_property">&quot;start&quot;</span>
                            <span className="token_operator">: </span> 
                            <span className="token_string">&quot;next start&quot;</span>
                            <span className="token_punctuation">,<br /></span>
                            <span className="token_property">&quot;lint&quot;</span>
                            <span className="token_operator">: </span> 
                            <span className="token_string">&quot;next lint&quot;<br /></span>
                        </div>
                        <span className="token_punctuation">&#125;</span>
                    </code>
                </pre>

                <p>These scripts refer to the different stages of developing an application:</p>
                <ul className="unordered_list">
                    <li className="list_item"><code className="inline">`dev`</code> - Runs <code className="inline">`next dev`</code> to start Next.js in development mode.</li>
                    <li className="list_item"><code className="inline">`build`</code> - Runs <code className="inline">`next build`</code> to build the application for production usage.</li>
                    <li className="list_item"><code className="inline">`start`</code> - Runs <code className="inline">`next start`</code> to start a Next.js production server.</li>
                    <li className="list_item"><code className="inline">`lint`</code> - Runs <code className="inline">`next lint`</code> to set up Next.js built-in ESLint configuration.</li>
                </ul>
                <p>Then look at the content of the <code className="inline">`dependencies`</code>:</p>
                <pre className="pre_language_json">
                    <code className="code_language_json">
                        <span className="token_property">&quot;dependencies&quot;</span>
                        <span className="token_operator">: </span> 
                        <span className="token_punctuation">&#123;<br /></span>

                        <div className="token_space">

                            <span className="token_property">&quot;@react-three/drei&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;^9.17.3&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;@react-three/fiber&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;^8.2.1&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;framer-motion&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;^6.5.1&quot;</span>
                            <span className="token_punctuation">,<br /></span>
                            
                            <span className="token_property">&quot;next&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;12.2.2&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;node-sass&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;^7.0.1&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;react&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;18.2.0&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;react-dom&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;18.2.0&quot;</span>
                            <span className="token_punctuation">,<br /></span>

                            <span className="token_property">&quot;typescript&quot;</span>
                            <span className="token_operator">:</span> 
                            <span className="token_string">&quot;^4.7.4&quot;<br /></span>
                        </div>
                        <span className="token_punctuation">&#125;</span>
                    </code>
                </pre>

                <p>Here are the dependencies associated with this project. You can find out more about the project <Link href="https://github.com/Attato/Portfolio" ><a target="blank">here.</a></Link></p>

                <div className="button__section">
                    <button><Link href="/#header"><a>Back to top<Image src="/arrow.svg" width="16" height="16" alt="Next page"/></a></Link></button>
                </div>  
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
                <h3>My works</h3>
                <p>My projects will be here.</p>
            </div>
        </div>


        <div className="row__projects">       
            <div className="project">
                <h1>
                    <span id="miniApps" className="setup_anchor"></span>
                    <Link href="#miniApps"><a>Mini apps</a></Link>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>Part of the portfolio in which I store my mini-applications. You can quickly jump to the project by clicking on the picture.</p>                    
                <a href="https://mini-apps-attato.vercel.app/" target="blank"><Image src="/mini_games.png" alt="" width={690} height={370}/></a>
                <p>Or look at the code <a href="https://github.com/Attato/Mini-apps" target="blank">here.</a></p>
            </div>

            <div className="project">
                <h1>
                    <span id="miniGames" className="setup_anchor"></span>
                    <Link href="#miniGames"><a>Mini games</a></Link>
                    <span className="permalink">
                        <Image src="/permalink.svg" alt="" width={18} height={18} />
                    </span>
                </h1>
                <p>Part of the portfolio in which I store my mini-games. You can quickly jump to the project by clicking on the picture.</p>                    
                <Link href="https://mini-games-attato.vercel.app/" target="blank"><a><Image src="/mini_games.png" alt="" width={690} height={370}/></a></Link>
                <p>Or look at the code <a href="https://github.com/Attato/Mini-games" target="blank">here.</a></p>
                
                <div className="button__section">
                    <button><Link href="/#header"><a>Back to top<Image src="/arrow.svg" width="16" height="16" alt="Next page"/></a></Link></button>
                </div>     
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
                <h3>Contact me</h3>
                <p>You can contact me here.</p>
                <div className="contact__links">
                    <div className="contact__block">
                        <Link href="https://github.com/Attato"><a className="social__link" target="blank"><Image src="/github.svg" alt="" width={20} height={20}/><span>GitHub</span></a></Link>
                        <Link href="mailto:rde8519@mail.ru"><a className="social__link"><Image src="/email.svg" alt="" width={20} height={20}/><span>Mail</span></a></Link>
                    </div>

                    <div className="contact__block">
                        <Link href="https://vk.com/qwaqwakva"><a className="social__link" target="blank"><Image src="/vk.svg" alt="" width={20} height={20}/><span>VKontakte</span></a></Link>
                        <Link href="https://t.me/qwaqwakwa"><a className="social__link" target="blank"><Image src="/telegram.svg" alt="" width={20} height={20}/><span>Telegram</span></a></Link>
                    </div>
                </div>
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