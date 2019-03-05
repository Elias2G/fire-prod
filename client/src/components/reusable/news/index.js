import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../../redux/actions';
import { ROOT_URL, getNews } from '../../../config';
import { Card } from './card';

class News extends Component {

  componentDidMount() {
    if(this.props.data.loaded.loaded.News === false) {
      this.props.fetch('fetch_news', `${ROOT_URL}${getNews}`);
    }
  }

  renderHelper = (data) => {
    return data.map((data,i) => {
      if(i < 4 && i !== 0) {
        return (
          <div className="column col-s-12 col-md-6 col-lg-12">
            <Card data={data} classed="small-news" loaded={this.props.data.loaded.loaded.News} />
          </div>
        )
      }
    })
  }

  render() {
    var news = this.props.data.news;

    return (
      <div className="">
        <div className="row">
          <div className="column col-s-12 col-md-12 col-lg-6">
            <Card data={this.props.data.news[0]} classed="big-news" loaded={this.props.data.loaded.loaded.News}/>
          </div>
          <div className="column col-s-12 col-md-12 col-lg-6 nop">
            <div className="row">

              {this.renderHelper(news)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    data
  }
}

export default connect(
  mapStateToProps,
  { fetch }
)(News)
