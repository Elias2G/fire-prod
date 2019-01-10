import React, { Component } from 'react';

import Container from './news-container';

export default class NewsPage extends Component {
  state = {
    items: 16,
  }

  setItems = (items) => {
    this.setState({
      items: items,
    })
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
        <h1 className="container-big">Neuigkeiten</h1>

        <Container itemsLoaded={this.state.items} setItems={this.setItems} />


        </div>
      </div>
    );
  }
}
