import React from 'react'
import {
    Link
}  from 'react-router-dom';
import urljoin from 'url-join';


function ArticleItem(props) {

    const { author, content, likes, scraps } = props.article;
    const comments_length = props.article.comments.length;
    const url = urljoin("https://everytime.kr/382283", "v" ,props.article.id.toString());

    return (
        <div className="card text-center article-card" >
            <p className="author">작성자: {author}</p>
            <p className="content">{content}</p>
            <li className="status">
                <ul className="likes">
                    {likes}
                </ul>
                <ul className="scraps">
                    {scraps} 
                </ul> 
                <ul className="comments-length">
                    {comments_length} 
                </ul>
            </li>
            <p className="content"><a href={url}>에타 게시글로 가기</a>  </p>
            <Link to={`/article/${props.article.id}`}>상세보기</Link>
        </div>
    )
}


export default ArticleItem;
