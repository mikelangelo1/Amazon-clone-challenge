import Head from 'next/head';
import Header from '../Header/header';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  </div>
);

export default Page;
