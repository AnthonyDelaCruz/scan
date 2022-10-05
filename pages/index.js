import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Links in NextJS app</h1>
      <a href='/home' style={{ color: 'red' }}>
        Home Page
      </a>
      <a href='/about' style={{ color: 'blue' }}>
        About Page
      </a>
      <a href='/contact' style={{ color: 'yellow' }}>
        Contact Page
      </a>
    </div>
  )
}
