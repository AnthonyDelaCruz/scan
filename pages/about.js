import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'red' }}>About</p>
        </React.Fragment>
    )
}

