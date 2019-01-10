import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch } from '../../../redux/actions';
import { ROOT_URL, getTermine } from '../../../config';

import TermineCard from './card';

class Termine extends Component {
  state = {
    reload: false,
  }
  componentDidMount() {
    this.props.fetch('fetch_termine', `${getTermine}`);
    console.log(this.props.data.termine);
  }

  render() {
    return (
      <div>
        <img className="head_image coantainer-big" />

        <div className="container-big">
          <h1>Termine</h1>
        </div>
          <TermineCard data={this.props.data.termine}/>
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
