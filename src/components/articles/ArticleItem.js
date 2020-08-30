import React from 'react'
import {
    Link
}  from 'react-router-dom';
import urljoin from 'url-join';


function ArticleItem(props) {

    const { author, content, likes, scraps } = props.article;
    const comments_length = props.article.comments.length;
    const url = urljoin("https://everytime.kr/382283", "v" ,props.article.id.toString());
    const onClickGoToEtaBtn = () => {
        window.open(url, '_blank');
    }

    return (
        <div className="card article-card" >
            <p className="article-card-author">작성자: {author}</p>
            <p className="article-card-content">{content}</p>
            <li className="article-card-status">
                <ul className="article-card-likes">
                    {likes}
                </ul>
                <ul className="article-card-scraps">
                    {scraps} 
                </ul> 
                <ul className="article-card-comments-length">
                    {comments_length} 
                </ul>
            </li>
            <button className="go-to-eta" onClick={onClickGoToEtaBtn}>에타 게시글로 가기</button>
            <Link to={`/article/${props.article.id}`} className="go-to-detail">상세보기</Link>
        </div>
    )
}


export default ArticleItem;
