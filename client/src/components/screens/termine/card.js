import React,{ Component } from 'react';
import _ from 'lodash';

export default class TermineCard extends Component{
  state = {
    numbers: ''
  }

  componentDidMount() {
    this.setState({
      numbers: this.props.length
    })
  }


  renderHelper = (data, numbers) => {
    console.log(data);
    var num = _.uniq(numbers);
    var array = []
    for ( var key in data) {
      array.push(data[key]);
    }
    return (
      array.map((data, i) => (

          <div className="row team-card shadow index">
            <div className="col-lg-3 col-md-3 terminBild shadow-big">
              <img className="team-img" src={data.Bildverzeichnis}/>
            </div>
            <div className="col-lg-9 col-md-9 container">
              <h5 className="break-all align-center">{data.Bezeichnung}</h5>
              <h6 className="align-center primary-light">
                {data.Datum}
              </h6>
            </div>
          </div>

        )
      )
    );
  }

  render() {
    const { data, length } = this.props;
    return (
      <div className="container-big">
        <div className="row shadow-land">
          {this.renderHelper(data, length)}
        </div>
      </div>
    );
  }
}
