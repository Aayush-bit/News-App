import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-spinners/ClipLoader";
import Card from './card/Card'

const ShowArticles = ({url}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    
    // API call for headlines
    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setNews(res.data.articles)
            setLoading(false)
            return res.data.articles[0]
        })
        .then((newsData) => {
            console.log(newsData)
        })
        .catch(err => {
            setError(err)
            console.log(err)
            setLoading(false)
        })
    }, [])

    return (
        <div className="ShowArticles">
            {
                loading ? 
                <div className="loader">
                    <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                </div> : 
                error === undefined ? 
                news.map((newsItem, index) => (
                    <Card key={index} 
                        urlToImage={newsItem.urlToImage} 
                        url={newsItem.url} 
                        title={newsItem.title} 
                        author={newsItem.author} 
                        publishedAt={newsItem.publishedAt} 
                        description={newsItem.description} />
                )) 
                : <p style={{color: 'red'}}>{JSON.stringify(error.stack)}</p>
            }
        </div>
    )
}

export default ShowArticles
