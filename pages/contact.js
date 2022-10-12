import Head from 'next/head'
import React from 'react'

export default function Contact() {
    return (
        <React.Fragment>
            <Head>
                <title>Contact</title>
            </Head>
            <h1 style={{ border: "2px solid red", padding: '20px' }}>About</h1>
            <div style={{ backgroundColor: 'red', color: 'gold', padding: '10px' }}>Another DIV</div>
        </React.Fragment>
    )
}

