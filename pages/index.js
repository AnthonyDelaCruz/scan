import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          property='og:image'
          content='https://scan-uh5x.vercel.app/zero-reg-og-image.png'
        />
      </Head>
      <Link href='/home' >
        <a style={{ color: 'white' }}>
          Home Page
        </a>
      </Link>
      <Link href='/about'>
        <a style={{ color: 'red' }}>
          About Page
        </a>
      </Link>
      <Link href='/contact'>
        <a style={{ color: 'blue', marginLeft: '10px', padding: '100px' }}>
          Contact Page
        </a>
      </Link>
      <a href='https://ui.dev'>ui.dev</a>
    </div>
  )
}
