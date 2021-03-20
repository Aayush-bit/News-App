import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const TechCrunch = () => {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Tech Crunch</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default TechCrunch
