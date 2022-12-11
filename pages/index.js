import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'

//components
import Header from '../components/Header'
import ProductsGrid from '../components/ProductsGrid';
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>boostsales</title>
        <meta name="description" content="инвайты и рассылка в телеграм" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://lk.easynetshop.ru/frontend/v5/ens-64ed800b.css" rel="stylesheet" />
      </Head>


      <Header />


      <main className={styles.main}>
        <div className="container">
          <h1>Главная</h1>
          <ProductsGrid />
        </div>
      </main>

      <Footer />

      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://lk.easynetshop.ru/frontend/v5/ens-64ed800b.js"
        strategy="beforeInteractive"
      />

    </div >
  )
}
