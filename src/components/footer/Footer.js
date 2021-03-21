import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="column-1 align-column-content">
                <Link 
                className="footer-brand footer-link footer-heading" 
                to="/">
                    News
                </Link>
                <div className="contact-developer">
                    <h3 className="title">Contact Developer</h3>
                    <ul className="list">
                        <li>
                            <a href="#" className="footer-link list-link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link list-link">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link list-link">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="column-2 align-column-content">
                <h3 className="footer-heading">Site Map</h3>
                <ul className="site-map-list">
                    <li>
                        <Link className="footer-link list-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="footer-link list-link" to="/apple">Apple</Link>
                    </li>
                    <li>
                        <Link className="footer-link list-link" to="/techcrunch">Tech Crunch</Link>
                    </li>
                    <li>
                        <Link className="footer-link list-link" to="/tesla">Tesla</Link>
                    </li>
                    <li>
                        <Link className="footer-link list-link" to="/business">Business</Link>
                    </li>
                    <li>
                        <Link className="footer-link list-link" to="/wallstreetjournal">Wall Street Journal</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
