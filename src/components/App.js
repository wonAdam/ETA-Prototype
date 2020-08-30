import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';
import ArticleContainer from './articles/ArticleContainer';
import { connect } from 'react-redux';
import './App.css';
import { fetchArticles } from '../_actions';
import ArticleDetail from './articles/ArticleDetail';



function App(props) {
  const [idx, setIdx] = useState(0);

  const onClickPrev = () => {
    if(idx-9 < 0){
      return;
    }
    setIdx(idx-9);
  }
  const onClickNext = () => {
    if(props.articles.length < idx+9){
      return;
    }
    setIdx(idx+9);
  }

  const startIdxChange = (value) => {
    if(typeof value !== 'number') return;
    setIdx(value)
  }

  useEffect(() => {
    props.fetchArticles(idx);
  }, []);


  return (
    <Router> 
          <div className="spacing">
            <Link to='/'>
              <Navbar />
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <ArticleContainer 
                articles={props.articles.slice(idx, idx+9)}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
              />
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
