import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const WallStreetJournal = () => {
    const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_API_KEY}`
    return (
        <div>
            <h1>Wall Street Journal</h1>
            <ShowArticles url={url} />            
        </div>
    )
}

export default WallStreetJournal
