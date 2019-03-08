import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { fetch, determine } from '../../../redux/actions';

import { ROOT_URL, getFunktionen, getDienstgrad } from '../../../config';

import MannImg from '../../images/headImage/Mannschaft.jpg';

import MannschaftContainer from './cardLoop';


class Mannschaft extends Component {
  componentDidMount() {
    if(this.props.data.loaded.loaded.Mannschaft === false) {
      this.props.fetch('fetch_mannschaft_d', `${ROOT_URL}${getDienstgrad}`);
      setTimeout(() => {
        this.props.fetch('fetch_mannschaft_f', `${ROOT_URL}${getFunktionen}`);
      },2000)

    }
  }

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Mannschaft</title>
          <link rel="canonical" href={ROOT_URL + '/mannschaft'} />
        </Helmet>

        <img className="head_image coantainer-big" src={MannImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
          <div className="container-big">
            <h2>Mannschaft</h2>
          </div>

          {
            this.props.data.loaded.loaded.Mannschaft === true ? <MannschaftContainer data={this.props.data.mannschaft} /> : <div></div>
          }
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
)(Mannschaft)
