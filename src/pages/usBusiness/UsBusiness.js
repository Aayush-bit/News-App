import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const UsBussiness = () => {
    const url = process.env.REACT_APP_BUSINESS_URL
    return (
        <div>
            <h1 className="page-title">Bussiness news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default UsBussiness
