import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../Routes'

function Navigation() {
    return (
        <div className="Navigation">
            <Router>
                <Routes/>
            </Router>
        </div>
    )
}

export default Navigation
