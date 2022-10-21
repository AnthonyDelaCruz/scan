import Head from 'next/head'
import React from 'react'

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <p style={{ fontSize: '40px', color: 'blue' }}>About</p>
            <a href='https://ant.design'>Ant D link</a>
            <a href='https://dev.to'>Dev.to link</a>
            <a href='https://youtube.com'>Youtube.com</a>
            <a href='https://medium.com '>Medium link</a>
        </div>
    )
}

