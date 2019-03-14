import React,{ Component } from 'react';
import _ from 'lodash';

import Single from './single';

export default class TermineCard extends Component{
  state = {
    numbers: '',
    cut: 0,
  }

  componentDidMount() {
    this.setState({
      numbers: this.props.length
    })
  }


  handleClick = () => {
    this.setState({
      ...this.state,
      cut: this.state.cut + 8,
    })
  }

  handleImage = () => {

  }

  renderHelper = (data, numbers) => {
    var time = new Date();
    var num = _.uniq(numbers);
    var array = [];
    var n = 0;
    for ( var key in data) {
      array.push(data[key]);
    }

    for(var i = 0; i < array.length; i++) {
      if( time.getFullYear() <= array[i].Datum.substring(0,4) && time.getMonth() + 1 == array[i].Datum.substring(5,7) && time.getDate() <= array[i].Datum.substring(8,10) ) {
      } else {
        if( time.getFullYear() <= array[i].Datum.substring(0,4) && time.getMonth() + 2 <= array[i].Datum.substring(5,7) ) {
        } else {
          n++
        }
      }
    }

    return (
      array.map((data, i) => {
          if(i > n + this.state.cut ) { return; }
          if( time.getFullYear() + 1 == data.Datum.substring(0,4) ) {
            return(
              <Single key={i} Bilderverzeichnis={data.Bilderverzeichnis} Datum={data.Datum} Bezeichnung={data.Bezeichnung} Uhrzeit={data.Uhrzeit} />
            )
          }
          if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 1 == data.Datum.substring(5,7) && time.getDate() <= data.Datum.substring(8,10) ) {
            return(
              <Single key={i} Bilderverzeichnis={data.Bilderverzeichnis} Datum={data.Datum} Bezeichnung={data.Bezeichnung} Uhrzeit={data.Uhrzeit} />
            )
          }
          if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 2 <= data.Datum.substring(5,7) ) {
            return(
              <Single key={i} Bilderverzeichnis={data.Bilderverzeichnis} Datum={data.Datum} Bezeichnung={data.Bezeichnung} Uhrzeit={data.Uhrzeit} />
            )
          }

        }
      )
    );
  }




  render() {
    const { data, length } = this.props;
    return (
      <div className="container-big nop">
        <div className="row">
          {this.renderHelper(data, length)}
          <div className="column col-md-12 justify-center flex-align-center">
            {this.state.cut >= data.length ? ' ' : <button onClick={this.handleClick} className="btn-pos-right"> mehr </button>}
          </div>
        </div>
      </div>
    );
  }
}
