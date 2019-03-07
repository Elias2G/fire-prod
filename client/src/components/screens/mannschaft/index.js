import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch, determine } from '../../../redux/actions';

import { ROOT_URL, getFunktionen, getDienstgrad } from '../../../config';

import MannImg from '../../images/headImage/Mannschaft.jpg';

import MannschaftContainer from './cardLoop';


class Mannschaft extends Component {
  componentDidMount() {
    if(this.props.data.loaded.loaded.Mannschaft === false) {
      this.props.fetch('fetch_mannschaft_d', `${ROOT_URL}${getDienstgrad}`);
      this.props.fetch('fetch_mannschaft_f', `${ROOT_URL}${getFunktionen}`);
    }
  }

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" src={MannImg} />

        <div className="bg-secondary ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
          <h2>Mannschaft</h2>
        </div>

        {
          this.props.data.loaded.loaded.Mannschaft === true ? <MannschaftContainer data={this.props.data.mannschaft} /> : <div></div>
        }

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
