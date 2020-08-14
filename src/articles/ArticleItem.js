import React, { Component } from 'react'
import '../App.css'
import urljoin from 'url-join';


class ArticleItem extends Component {
    state = {
        id: 'id',
        author: 'author',
        content: 'content',
        likes: '0',
        scraps: '0',
        comments_length:'0',
        url:'',
    }

    render() {
        const { author, content, likes, scraps } = this.props.article;
        const comments_length = this.props.article.comments.length;
        // const url = urljoin("https://everytime.kr/382283", "v" ,this.props.article.id.toString());
        return (
            <div className="card text-center article-card" style={{height:"300px"}}>
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
                <a href={urljoin("https://everytime.kr/382283", "v", this.props.article.id.toString()   )}>에타 게시글로 가기</a>
            </div>
        )
    }
}

export default ArticleItem;
