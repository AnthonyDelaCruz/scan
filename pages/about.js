import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'red' }}>About</p>
            <a href='https://dev.to'>Dev.to link</a>
            <a href='https://twitter.to'>Twitter link</a>
            <a href='https://youtube.com'>Youtube link</a>
            <a href='https://fb.com'>Facebook link</a>
        </div>
    )
}

