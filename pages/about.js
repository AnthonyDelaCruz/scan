import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'blue' }}>About</p>
            <a href='https://www.youtube.com/'>Youtube link</a>
            <a href='https://medium.com/'>Twitter link</a>
            <a href='https://twitter.com'>DEV.to link</a>
        </div>
    )
}

