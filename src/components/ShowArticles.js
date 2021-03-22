// The following component is called to show the articles which were requested from the API
// The url to send request to is provided as a prop 'url'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from "react-spinners/ClipLoader";
import Card from './card/Card'

const ShowArticles = ({url}) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    
    // API call to the provided url
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
                // the following is the composition of 2 conditionals
                // the basic idea is to:
                // check whether loading is true or false
                // if true - then display Loader component
                // if false - then another conditional is defined
                // in the other conditional we check whether 'error' is 'undefined'
                // if true - then map over the data
                // if false - then show the error
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
