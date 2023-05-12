import Head from 'next/head';
import Navbar from '../components/Navbar';
import FirstContainer from '../components/FirstContainer';
import WhatsappButton from '../components/WhatsappButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Belcor Interiores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <WhatsappButton />
        <FirstContainer />
      </main>
    </>
  )
}
