import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Tailwind Storybook | TypeScript</title>
      </Head>
      <main className='container mx-auto'>
        <h1>Tailwind Storybook</h1>
      </main>
    </>
  );
};

export default Home;
