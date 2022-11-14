import Head from 'next/head'
import React from 'react'

import Button from '../components/Button'

export default function Contact() {
    return (
        <React.Fragment>
            <Head>
                <title>Contact</title>
            </Head>
            <h1 style={{ border: "2px solid red", padding: '20px' }}>Contact</h1>
            <div style={{ backgroundColor: 'blue', color: 'yellow', padding: '20px' }}>Another DIV</div>
            <Button />
            <br></br>
            <br></br>
            <Button />
            <div>Above last button</div>
            <Button />
            <a href='https://medium.com'>Medium link</a>
        </React.Fragment>
    )
}

