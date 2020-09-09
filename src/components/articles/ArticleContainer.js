import React from 'react'
import ArticleItem from './ArticleItem';
import { connect } from 'react-redux';

function ArticleContainer(props) {

    const articles = props.articles;
    if(articles.length > 0){
        return (
            <div className="container">
                <div className="article-container">
                    {articles.map((article) => {
                        return <ArticleItem key={article.id} article={article} />
                    })}
                </div>
                <div className="prev-next">
                    <div className="prev-next-btns">
                        <button onClick={props.onClickPrev}>{`<`}</button>
                        <button onClick={props.onClickNext}>{`>`}</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container article-container">
                <div className="loader-container">
                    <img src="./GearLoader.svg" alt="loading..." className="loader"/>
                    <p className="loader-text">서버가 미국이라 좀 걸립니다...</p>
                </div>
            </div>
        )
    }
}



export default connect()(ArticleContainer)
