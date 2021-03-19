import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const UsBussiness = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Bussiness news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default UsBussiness
