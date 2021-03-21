import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const WallStreetJournal = () => {
    const url = process.env.REACT_APP_WALLSTREET_JOURNAL_URL
    return (
        <div>
            <h1 className="page-title">Wall Street Journal</h1>
            <ShowArticles url={url} />            
        </div>
    )
}

export default WallStreetJournal
