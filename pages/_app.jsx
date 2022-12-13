import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'



function Boostsales({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title key="title">boostsales</title>
        <meta name="description" content="инвайты и рассылка в телеграм" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//lk.easynetshop.ru/frontend/v5/test.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}

export default Boostsales
