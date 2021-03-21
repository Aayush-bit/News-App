import React from 'react'
import ShowArticles from '../../components/ShowArticles'

const Home = () => {
    const url = process.env.REACT_APP_TECH_CRUNCH_URL

    return (
        <div className="Home">
            <h1 className="page-title">Home</h1>
            <ShowArticles url={url} />
        </div>
    )
}

export default Home
