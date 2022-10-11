import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
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
        <a style={{ color: 'red', marginLeft: '10px', padding: '100px' }}>
          Contact Page
        </a>
      </Link>
    </div>
  )
}
