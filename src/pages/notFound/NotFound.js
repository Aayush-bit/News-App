import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="NotFound">
            <h1 className="page-title">Wrong url</h1>
            <p>Go back to website <Link to="/">Home</Link></p>
        </div>
    )
}

export default NotFound
