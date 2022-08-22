import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
    return (

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
}

export default About