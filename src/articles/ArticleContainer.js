import React, { Component } from 'react'
import ArticleItem from './ArticleItem';

class ArticleContainer extends Component {

    render() {
        if(this.props.articles){
            return (
                <div className="container article-container">
                    {this.props.articles.map((article) => {
                        return <ArticleItem key={article.id} article={article} />
                    })}
                </div>
            )
        }
        else {
            return (
                <div className="container article-container" />
            )
        }
    }
}

export default ArticleContainer
