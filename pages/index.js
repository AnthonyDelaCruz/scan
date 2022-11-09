import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          property='og:image'
          content='https://www.canva.com/design/DAFRbkE2Jj4/e1LUcJqi8Eeare6PhLhH3Q/view?utm_content=DAFRbkE2Jj4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
        />
      </Head>
      <Link href='/home' >
        <a style={{ color: 'white' }}>
          Home Page
        </a>
      </Link>
      <Link href='/about'>
        <a style={{ color: 'blue' }}>
          About Page
        </a>
      </Link>
      <Link href='/contact'>
        <a style={{ color: 'blue', marginLeft: '10px', padding: '100px' }}>
          Contact Page
        </a>
      </Link>
    </div>
  )
}
