import Head from 'next/head';
import HomePage from './HomePage/HomePage';

export default function Home() {
  return (
    <div >

      <Head>
        <title>Dashboard App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>


      <main>
        <HomePage />
      </main>


    </div>
  );
}
