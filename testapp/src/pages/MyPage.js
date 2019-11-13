import React from 'react'
import { Link } from 'react-router-dom'
import MyLink from './pages/MyLink'

function MyPage() {
    return (
        <div>
            <h1>this is my page!!!!?!?!@</h1>
            <a href="https://themanwhofellinbuffalo.com">my website</a>
            <Link to={MyLink}>Other App View</Link>
        </div>
    )
}

export default MyPage