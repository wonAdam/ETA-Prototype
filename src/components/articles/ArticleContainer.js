import React from 'react'
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';

function ArticleContainer(props) {

    const articles = props.articles;
    if(articles){
        return (
            <div className="container article-container">
                {articles.map((article) => {
                    return <ArticleItem key={article.id} article={article} />
                })}
            </div>
        )
    }
    else {
        return (
            <div className="container article-container">
            </div>
        )
    }
}



export default connect()(ArticleContainer)
