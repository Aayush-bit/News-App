import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Apple from './pages/apple/Apple'
import TechCrunch from './pages/TechCrunch/TechCrunch'
import Tesla from './pages/tesla/Tesla'
import UsBusiness from './pages/usBusiness/UsBusiness'
import WallStreetJournal from './pages/wallStreetJournal/WallStreetJournal'
import NotFound from './pages/notFound/NotFound'

function Routes() {    
    return (
        <div className="Routes">
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/apple'} component={Apple} />
                <Route exact path={'/techcrunch'} component={TechCrunch} />
                <Route exact path={'/tesla'} component={Tesla} />
                <Route exact path={'/business'} component={UsBusiness} />
                <Route exact path={'/wallstreetjournal'} component={WallStreetJournal} />                
                <Route path={'*'} component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes
