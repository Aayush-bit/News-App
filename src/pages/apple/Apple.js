import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Apple = () => {
    const url = process.env.REACT_APP_APPLE_URL
    return (
        <div>
            <h1 className="page-title">Apple news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Apple
