import React from 'react'

const FullNews = ([title, author, publishedAt, description, content, url, urlToImg]) => {
    return (
        <div>
            <img src={urlToImg} alt="" />
            <h1>{title}</h1>
            <small>By - {author}, At - {publishedAt}, <a href={url}>Source</a></small>
            <h4>{description}</h4>
            <p>{content}</p>
        </div>
    )
}

export default FullNews
