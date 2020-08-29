import React from 'react'
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';

function ArticleContainer(props) {
    if(props.articles){
        return (
            <div className="container article-container">
                {props.articles.map((article) => {
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


const mapStateToProps = state => {
    return {
        articles:state.articles
    }
}

export default connect(mapStateToProps)(ArticleContainer)
