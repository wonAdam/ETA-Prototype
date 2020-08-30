import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        console.log(Array.from(e.childNodes));
        return e.childNodes.length === 0 ? "" : Array.from(e.childNodes).map((c) => c.nodeValue ? c.data : c.outerHTML).reduce((acc, cur) => acc+cur);
    }


    if(article){
        const { author, content, comments, likes, scraps } = article;
        const comments_length = article.comments.length;
        return (
            <div className="container article-detail-container">
                <div className="article-detail-upper">
                    <div className="article-detail-upper-left">
                        <div className="article-detail-author" dangerouslySetInnerHTML={{ __html: htmlDecode(author) }} /> 
                        <div className="article-detail-content" dangerouslySetInnerHTML={{__html: htmlDecode(content)}} />
                    </div>
                    <div className="article-detail-upper-right">
                        <Link to={`/`} className="article-detail-back">{`<`}</Link>
                    </div>
                </div>
                <div className="article-detail-status-wrapper"> 
                    <ul className="article-detail-status">
                        <li className="article-detail-likes">
                            {likes}
                        </li>
                        <li className="article-detail-scraps">
                            {scraps} 
                        </li> 
                        <li className="article-detail-comments-length">
                            {comments_length} 
                        </li>
                    </ul>   
                </div>
                {comments.map((comment) => {
                    const html = htmlDecode(comment.author)+"  "+htmlDecode(comment.content);
                    if(comment.isChild){
                        return (
                            <div className="article-detail-comment comment-child" dangerouslySetInnerHTML={{__html: html}} />
                        )
                    }
                    else{
                        return (
                            <div className="article-detail-comment comment-parent" dangerouslySetInnerHTML={{__html: html}} />
                        )
                    }
                })}
                
                
            </div>
        )
    }
    else{
        return (
            <div className="container article-detail-container">
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




