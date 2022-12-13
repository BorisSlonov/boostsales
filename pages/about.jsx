import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'

//components
import ProductsGrid from '../components/ProductsGrid';


export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title key="title">boostsales about test</title>
            </Head>

            <main className={styles.main}>
                <div className="container">
                    <h1>О нас</h1>
                    <ProductsGrid />
                </div>
            </main>


            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://lk.easynetshop.ru/frontend/v5/ens-64ed800b.js"
            />

        </div >
    )
}
