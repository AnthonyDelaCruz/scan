import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Links in NextJS app</h1>
      <Link href='/home' >
        <a style={{ color: 'red' }}>
          Home Page
        </a>
      </Link>
      <Link href='/about'>
        <a style={{ color: 'blue' }}>
          About Page
        </a>
      </Link>
      <Link href='/contact'>
        <a style={{ color: 'yellow' }}>
          Contact Page
        </a>
      </Link>
    </div>
  )
}
