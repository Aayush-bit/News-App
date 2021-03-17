import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-spinners/ClipLoader";

const Home = () => {
    const url = `http://newsapi.org/v2/everything?q=tesla&from=2021-02-17&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    // API call for headlines
    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setNews(res.data.articles)
            setLoading(false)
            return res.data.articles
        })
        .then((newsData) => {
            console.log(newsData[0])
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="Home">
            <h1>Home</h1>
            {
                loading ? 
                <div className="loader">
                    <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                </div>
                : news.map((newsItem, index) => (
                    <React.Fragment key={index}>
                        <hr/>
                        <img className="news--image" src={newsItem.urlToImage} alt="" />
                        <a href={newsItem.url} className="news--source">
                            <h3>{newsItem.title}</h3>
                        </a>
                        <small>By - {newsItem.author}, At - {newsItem.publishedAt}</small>
                        <h4>{newsItem.description}</h4>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default Home
