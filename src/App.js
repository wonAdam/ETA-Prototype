import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import ArticleContainer from './components/articles/ArticleContainer';
import { connect } from 'react-redux';
import './App.css';
import { fetchArticles } from './_actions';
import ArticleDetail from './components/articles/ArticleDetail';



function App(props) {
  const [idx, setIdx] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const onClickPrev = () => {
    if(idx-9 < 0){
      return;
    }
    setIdx(idx-9);
  }
  const onClickNext = () => {
    if(isLastPage){
      return;
    }
    setIdx(idx+9);
  }

  useEffect(() => {
    props.fetchArticles(idx);
  }, [idx]);

  useEffect(() => {
    if(props.articles.length < 9){
      setIsLastPage(true);
    }
    else{
      setIsLastPage(false);
    }
  }, [props.articles])

  return (
    <Router> 
          <div className="spacing">
            <Link to='/'>
              <Navbar />
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <ArticleContainer articles={props.articles}/>
              <div className="prev-next">
                <button onClick={onClickPrev}>{`<`}</button>
                <button onClick={onClickNext}>{`>`}</button>
              </div>
            </Route>

            <Route path='/article/:id' render={(props) => <ArticleDetail {...props}/>}/>
          </Switch>
        </Router>
  )
}

const mapStateToProps = (state) => {
  return{
    articles:state.articles,
  }
}

export default connect(mapStateToProps, {fetchArticles})(App);
