import Head from 'next/head'
import Image from 'next/image'
import products from '../products.json'
import styles from '../styles/Home.module.css'
import ProductsGrid from '../styles/ProductsGrid.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://lk.easynetshop.ru/frontend/v5/ens-64ed800b.css" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img className={ProductsGrid.img} src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <a className="btn-ens-action btn-ens-style" data-rel={product.title}>Купить</a>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script defer src="https://lk.easynetshop.ru/frontend/v5/ens-64ed800b.js"></script>

    </div>
  )
}
