import React from 'react'
// import React, {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Apple from './pages/apple/Apple'
import TechCrunch from './pages/TechCrunch/TechCrunch'
import Tesla from './pages/tesla/Tesla'
import UsBusiness from './pages/usBusiness/UsBusiness'
import WallStreetJournal from './pages/wallStreetJournal/WallStreetJournal'
// import axios from 'axios'
import NotFound from './pages/notFound/NotFound'
// import FullNews from './components/fullNews/FullNews'

function Routes() {
    // const [news, setNews] = useState([])
    
    // useEffect(() => {
    //     axios.get(url)
    //     .then((res) => {
    //         setNews(res.data.articles)
    //         return res.data.articles[0]
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])
    
    return (
        <div className="Routes">
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/apple'} component={Apple} />
                <Route exact path={'/techcrunch'} component={TechCrunch} />
                <Route exact path={'/tesla'} component={Tesla} />
                <Route exact path={'/business'} component={UsBusiness} />
                <Route exact path={'/wallstreetjournal'} component={WallStreetJournal} />
                
                {/* under construction */}
                {/* map over the news articles and set routes and send required data as props */}
                {/* {
                    news.forEach((newsItem, index) => {
                        // const link = encodeURIComponent(`${newsItem.title}/${newsItem.publishedAt.split('T')[0]}`);
                        // const title = encodeURIComponent(newsItem.title);
                        // console.log(`/${link}`)
                        // console.log(`/?title=${title}&date=${newsItem.publishedAt.split('T')[0]}`)
                        // return (
                        //     <Route exact path={ `/${link}` } key={index} >
                        //         <FullNews />
                        //     </Route>
                        // )
                        // return (
                        //     <Route exact path={ `?title=${title}&date=${newsItem.publishedAt.split('T')[0]}` } key={index} >
                        //         <FullNews />
                        //     </Route>
                        // )
                    })
                } */}
                
                <Route path={'*'} component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes
