import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'red' }}>About</p>
            <a href='https://www.youtube.com/'>Youtube link</a>
            <a href='https://medium.com/'>Twitter link</a>
            <a href='https://dev.to/'>DEV.to link</a>
        </React.Fragment>
    )
}

