import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Science = () => {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Science news</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Science
