import Head from 'next/head';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

const Home = () => {
	return (
		<>
			<Head>
                <title>Главная</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

			<Header />
			
            

			<Footer />
		</>
	);
};

export default Home;
