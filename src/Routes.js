import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/notFound/NotFound'

function Routes() {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'*'} component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes
