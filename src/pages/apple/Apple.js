import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Apple = () => {
    const url = `https://newsapi.org/v2/everything?q=apple&from=2021-03-18&to=2021-03-18&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Apple news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Apple
