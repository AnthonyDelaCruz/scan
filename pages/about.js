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
            <p style={{ fontSize: '41px', color: 'red' }}>About</p>
            <a href='https://dev.to'>Dev.to link</a>
            <a href='https://twitter.to'>Twitter link</a>
            <a href='https://youtube.com'>Youtube link</a>
            <a href='https://fb.com'>Facebook link</a>
            <Button />
        </div>
    )
}

