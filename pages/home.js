import Head from 'next/head'
import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
            </Head>
            <span style={{ color: 'red' }}>HOME</span>
        </React.Fragment>
    )
}
