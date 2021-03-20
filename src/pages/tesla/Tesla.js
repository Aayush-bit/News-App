import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Tesla = () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-02-20&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Tesla news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Tesla
