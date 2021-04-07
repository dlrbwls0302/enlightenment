import React from 'react';
import '../styles/Article.css';


const Article = ({ article }) => {
    const { title, link, snippet, thumbnail } = article;

    return (
        <div className='eachItem'>
            {thumbnail && (
                <div className="thumbnail">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={thumbnail} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{snippet}</p>
            </div>
        </div>
    );
};

export default Article;