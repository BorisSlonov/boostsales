import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
import { en } from '../locales/en';
import { ru } from '../locales/ru';

//components
import ProductsGrid from '../components/ProductsGrid';
import Calc from '../components/Calc'


const TitleAnimation = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0
  }
}


export default function Home() {
  const router = useRouter();
  const langJson = router.locale === 'en' ? en : ru;
  return (
    <div>
      <main className={styles.main}>
        <motion.div
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.2 }}
          className="container"
        >
          <motion.h1 variants={TitleAnimation}>{langJson.title}</motion.h1>
          <Calc />
          <ProductsGrid />
        </motion.div>
      </main>


      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//lk.easynetshop.ru/frontend/v5/test.js"
      />
      {/* <Script src="three.r134.min.js" />
      <Script src="vanta.rings.min.js" /> */}

    </div >
  )
}
