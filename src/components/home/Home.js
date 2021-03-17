import React, {useEffect} from 'react'

const Home = () => {
    // API call for headlines
    // useEffect(() => {}, [])

    return (
        <div className="Home">
            <h1>Home</h1>
            <p>{process.env.REACT_APP_API_KEY}</p>
        </div>
    )
}

export default Home
