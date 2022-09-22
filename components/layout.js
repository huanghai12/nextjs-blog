// import Head from 'next/head';
// import Image from 'next/image';
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';
import Head from "next/head";
import Image from 'next/image'
import styles from './layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Link from "next/link";
const name = "haiyanna";
export const siteTitle = "Next.js is"
export default function Layout({children,home}){
    return (<div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico"></link>
            <meta name="description" content="Learn how to build a personal website using Next.js"></meta>
            <meta name="og:title" content={siteTitle}></meta>
            <meta name="twitter:card" content="summary"></meta>
        </Head>
        <header className={styles.header}>
            {
                home ? (
                    <>
                        <Image priority src="/images/profile.png" className={utilsStyles.borderCircle} height={144} width={144} alt={name}></Image>
                        <h1>{name}1</h1>
                    </>
                )
                : (
                    <>
                        <Link href='/'>
                            <a>
                                <Image priority src="/images/profile.png" className={utilsStyles.borderCircle} height={108} width={108} alt={name}>

                                </Image>
                            </a>
                        </Link>
                        <h2 className={utilsStyles.headingLg}>
                            <Link href="/">
                                <a className={utilsStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )
            }
        </header>
        <main>{children}</main>
        {
            !home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )
        }
    </div>)
}
// const siteTitle:any = "123"
// export default {siteTitle};