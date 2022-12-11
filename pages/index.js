import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'

//components
import Header from '../components/Header'
import ProductsGrid from '../components/ProductsGrid';
import Calc from '../components/Calc'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <div className="container">
          <h1>Главная</h1>
          
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
