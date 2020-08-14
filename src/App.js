import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import ArticleContainer from './articles/ArticleContainer';
import './App.css';
const axios = require('axios').default;


class App extends Component {
  state={
    start:0,
    articles:null,
    endOfArticlesIndex: 0,
    detail:false,
  }
  onClickPrev = () => {
    const start = this.state.start-10 >= 0 ? this.state.start-10 : this.state.start;
    axios.get(`https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283?start=${start}&end=${start+9}`)
    .then((response) => {
        const articles = response.data.data;
        this.setState({start, articles});
    }); 

  }
  onClickNext = () => {
    const start = this.state.start+10 < this.state.endOfArticlesIndex ? this.state.start+10 : this.state.start;
    axios.get(`https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283?start=${start}&end=${start+9}`)
    .then((response) => {
        const articles = response.data.data;
        this.setState({start, articles});
    }); 

  }

  constructor(props){
    super(props)
    let g_articles;
    let lengthOfArticles;
    axios.get(`https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283?start=${this.state.start}&end=${this.state.start+9}`)
    .then((response) => {
      const articles = response.data.data;
      g_articles = articles;
      if(this.state.endOfArticlesIndex === 0){
        axios.get(`https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283`)
        .then((response) => {
            console.log(response.data.data.length)
            lengthOfArticles = response.data.data.length;
            this.setState({articles:g_articles, endOfArticlesIndex:lengthOfArticles});
        });   
      }
      else{
        this.setState({articles:g_articles});
      }
    });   

  }

  render() {
      return(
        <Fragment>
          <div className="spacing"></div>
          <Navbar />
          <ArticleContainer start={this.state.start} end={this.state.start+9} articles={this.state.articles} />
          <div className="prev-next">
            <li>
              <ul onClick={this.onClickPrev}>prev</ul>
              <ul onClick={this.onClickNext}>next</ul>
            </li>
          </div>
        </Fragment>
      );
  }
  
}



export default App;
