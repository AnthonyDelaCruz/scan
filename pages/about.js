import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'red' }}>About</p>
            <a href='https://facebook.com'>fb link</a>
            <a href='https://ant.design'>Ant D link</a>
            <a href='https://youtube.com'>Youtube</a>
        </div>
    )
}

