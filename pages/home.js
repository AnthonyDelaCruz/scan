import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <button style={{ backgroundColor: 'red' }}>Red button</button>
            <button style={{ backgroundColor: 'green' }}>Green button</button>
            <button style={{ backgroundColor: 'blue' }}>Blue button</button>
            <Link href='/'>Back to main page</Link>
        </div>
    )
}
