import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Links in NextJS app</h1>
      <Link href='/home' style={{ color: 'red' }}>
        Home Page
      </Link>
      <Link href='/about' style={{ color: 'blue' }}>
        About Page
      </Link>
      <Link href='/contact' style={{ color: 'yellow' }}>
        Contact Page
      </Link>
    </div>
  )
}
