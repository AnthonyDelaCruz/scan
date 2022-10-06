import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div>
            <title>About page</title>
            <h1>About page</h1>
            <div style={{ border: '1px solid red' }}>I have a border</div>
            <div style={{ backgroundColor: 'gray' }}>
                <p>I have a colored background</p>
            </div>
            <Link href='/'>Back to main</Link>
        </div>
    )
}
