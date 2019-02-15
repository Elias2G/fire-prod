import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetch } from '../../../redux/actions';
import { ROOT_URL, getNews } from '../../../config';

import Card from './card';

class Container extends Component {

  componentDidMount() {
    if(this.props.data.loaded.loaded.News === false) {
      this.props.fetch('fetch_news', `${ROOT_URL}${getNews}`);
    }
  }

  renderHelper = (loadedItems, data) => {
    return data.map((data, i) => {
      if(i < loadedItems) {
        return (
          <div className="column col-md-4 col-lg-3">
            <Card key={i} data={data} />
          </div>
        );
      }
    })
  }

  handleClick = (loadedItems) => {
    this.props.setItems(loadedItems + 4);
  }

  loadMore = (loadedItems, data) => {
    if(++loadedItems < data.length) {
      console.log(data.length);
      return (
        <button className="load-more" onClick={() => this.handleClick(loadedItems)}>mehr laden</button>
      )
    }
  }

  render() {
    return (
      <div className="container-big nop">
        <div className="row">
          {this.renderHelper(this.props.itemsLoaded, this.props.data.news)}
        </div>
        <div className="row">
          {this.loadMore(this.props.itemsLoaded, this.props.data.news)}
        </div>
        <div></div>
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
)(Container)
