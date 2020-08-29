import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

function ArticleDetail(props) {
    console.log(props)
    const [article, setArticle] = useState(null);

    useEffect(() => {
        for(let a of props.articles){
            if(a.id.toString() === props.match.params.id){
                setArticle(a);
                return;
            }
        }
    }, [props.articles])

    const htmlDecode = (input) => {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : Array.from(e.childNodes).map((c) => c.nodeValue ? c.nodeValue : c.outerHTML);
    }


    if(article){
        const { author, content, comments, likes, scraps } = article;
        const comments_length = article.comments.length;
        return (
            <div className="article-detail-container">
                <div className="article-detail-author" dangerouslySetInnerHTML={{ __html: htmlDecode(author) }} /> 
                <div className="article-detail-content" dangerouslySetInnerHTML={{__html: htmlDecode(content)}} />
                <div className="article-detail-status"> 
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
                </div>
                {comments.map((comment) => {
                    const html = htmlDecode(comment.author)+htmlDecode(comment.content);
                    if(comment.isChild){
                        return (
                            <div className="article-detail-comment comment-child" dangerouslySetInnerHTML={{__html: html}} />
                        )
                    }
                    else{
                        return (
                            <div className="article-detail-content comment-parent" dangerouslySetInnerHTML={{__html: html}} />
                        )
                    }
                })}
                
            </div>
        )
    }
    else{
        return (
            <div className="article-detail-container">
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles:state.articles
    }
} 

export default connect(mapStateToProps)(ArticleDetail)




