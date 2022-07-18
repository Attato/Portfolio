import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = ( ) => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.main}>
                    <span className={styles.social__links}>
                        <Link href="https://vk.com/qwaqwakva"><a><Image src="/vk.svg" alt="" width={20} height={20}/></a></Link>
                        <Link href="https://t.me/qwaqwakwa"><a><Image src="/telegram.svg" alt="" width={20} height={20}/></a></Link>
                        <Link href="https://github.com/Attato"><a><Image src="/github.svg" alt="" width={20} height={20}/></a></Link>

                    </span>
                    <h1 className={styles.logo}>Attato</h1>
                    <div className={styles.mail}>rde8519@mail.ru</div>
                </div>
                <div className={styles.sub}>
                    <Link href=""><a>Home</a></Link>
                    <Link href=""><a>About</a></Link>
                    <Link href=""><a>Portfolio</a></Link>
                    <Link href=""><a>Contact</a></Link>
                </div>
            </header>
        </>
    );
}

export default Header;