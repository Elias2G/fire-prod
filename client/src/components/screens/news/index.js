import React, { Component } from 'react';

import Container from './news-container';

import NewsImg from '../../images/headImage/News.jpg';

export default class NewsPage extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

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
        <img className="head_image coantainer-big" src={NewsImg} />

        <div className="bg-secondary ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
        <h2 className="container-big">Neuigkeiten</h2>

        <Container itemsLoaded={this.state.items} setItems={this.setItems} />


        </div>
      </div>
    );
  }
}
