import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import packages from '../db/packages.json';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Media Marketing 123</title>
        <meta
          name='description'
          content='Elevate your social media presence with 3 simple steps.'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.img}>
            <Image
              src='/images/smm123.jpeg'
              height={160}
              width={160}
              alt='logo'
            />
          </div>
          <h1>Social Media Marketing 123</h1>
          <p>
            Elevate your social media presence in 3 simple steps. Join our live
            sessions today.
          </p>
        </div>
        <section className={styles.packages}>
          {packages.map(({ name, price, details, link, image }, i) => (
            <a href={link} target='_blank' rel='noopener noreferrer' key={i}>
              <h3>{name} &rarr;</h3>
              <div className={styles.img}>
                <Image src={image} height={100} width={100} alt={name} />
              </div>
              <div className={styles.price}>{price}</div>
              <ol className={styles.details}>
                {details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ol>
            </a>
          ))}
        </section>
        <footer className={styles.footer}>
          Got a question?{' '}
          <a
            href='https://wa.me/60173082891'
            target='_blank'
            rel='noopener noreferrer'
          >
            WhatsApp Us
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
