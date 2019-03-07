import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getTermine } from '../../../config';

import Ter from '../../images/headImage/Termin.jpg';

import TermineCard from './card';

class Termine extends Component {
  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_termine', `${ROOT_URL}${getTermine}`);
  }

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Termine</title>
          <link rel="canonical" href={ROOT_URL + '/termine'} />
        </Helmet>

        <img className="head_image coantainer-big" src={Ter}/>

        <div className="bg-secondary ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big nopb">
          <h2 className="container-big">Termine</h2>
        </div>
        <div className="container-big nopt">
          <TermineCard data={this.props.data.termine}/>
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
)(Termine)
