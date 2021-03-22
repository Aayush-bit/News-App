// This page is rendered when the route is /tesla

import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Tesla = () => {
    const url = process.env.REACT_APP_TESLA_URL
    return (
        <div>
            <h1 className="page-title">Tesla news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Tesla
