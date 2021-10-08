// This page is rendered when the route is /business
import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const UsBussiness = () => {
    const url = process.env.REACT_APP_BUSINESS_URL
    return (
        <div>
            <h1 className="page-title">Business news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default UsBussiness
