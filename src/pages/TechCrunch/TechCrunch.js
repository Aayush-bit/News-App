// This page is rendered when the route is /techcrunch

import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const TechCrunch = () => {
    const url = process.env.REACT_APP_TECH_CRUNCH_URL
    
    return (
        <div>
            <h1 className="page-title">Tech Crunch</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default TechCrunch
