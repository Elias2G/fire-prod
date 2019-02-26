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
    var time = new Date();
    var num = _.uniq(numbers);
    var array = []
    console.log(time.getMonth() + 1);
    for ( var key in data) {
      array.push(data[key]);
    }

    return (
      array.map((data, i) => {
          if(i > 28) { return; }
          if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 1 == data.Datum.substring(5,7) && time.getDate() <= data.Datum.substring(8,10) ) {
            return(
              <div className="column col-md-4 col-lg-3">
                <div className="news-card shadow">
                  <img className="placeholder_img" src={data.Bildverzeichnis} />
                  <div className="container">
                    <p className="bold">{data.Bezeichnung}</p>
                    <p className="primary-light date-size">{
                      data.Datum.substring(8,10) + '.' +
                      data.Datum.substring(5,7) + '.' +
                      data.Datum.substring(0,4)
                    }</p>
                    <p className="container nopr nopl">
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                    </p>
                  </div>
                </div>
              </div>
            )
          }
          if( time.getFullYear() <= data.Datum.substring(0,4) && time.getMonth() + 2 <= data.Datum.substring(5,7) ) {
            return(
              <div className="column col-md-4 col-lg-3">
                <div className="news-card shadow">
                  <img className="placeholder_img" src={data.Bildverzeichnis} />
                  <div className="container">
                    <p className="bold">{data.Bezeichnung}</p>
                    <p className="primary-light date-size">{
                      data.Datum.substring(8,10) + '.' +
                      data.Datum.substring(5,7) + '.' +
                      data.Datum.substring(0,4)
                    }</p>
                    <p className="container nopr nopl">
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                      asdf ahahg dkj fojas asdjg asg asödhgja hashdjh ah
                      dj ahd öasdg h ajsdhg  hlasjdhgj ahd hasjdgh
                    </p>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    );
  }
}
