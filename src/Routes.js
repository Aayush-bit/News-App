import React, {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import axios from 'axios'
import NotFound from './components/notFound/NotFound'

function Routes() {
    const [news, setNews] = useState([])
    const url = `http://newsapi.org/v2/everything?q=tesla&from=2021-02-17&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
    
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setNews(res.data.articles)
            return res.data.articles[0]
        })
        .then((newsData) => {
            console.log(newsData)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div className="Routes">
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'*'} component={NotFound} />
                
                {/* under construction */}

                {/* map over the news articles and set routes and send required data as props */}
                {/* {
                    console.log(news)
                } */}
            </Switch>
        </div>
    )
}

export default Routes
