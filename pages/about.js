import Head from 'next/head'
import React from 'react'

import Button from '../components/Button'
import styles from '../styles/about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <p className='p-tag-about' style={{ fontSize: '20px', color: 'red' }}>About</p>
            <a href='https://youtube.com'>Youtube.com</a>
            <Button />
        </div>
    )
}

