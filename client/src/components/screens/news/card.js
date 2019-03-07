import React, {Component} from 'react';
import Gallery from '../../reusable/gallery';



export default class Card extends Component {
  state = {
    open: false,
    class: 'gallery_opener'
  }

  handleClick = () => {
    this.setState({
      open: this.state.open !== false ? false : true,
      class: this.state.open !== false ? 'gallery_opener' : 'gallery_opener-opened',
    })
  }

  render() {

    var { data } = this.props;
    var place = [];
    var img;
    if(data.Bilderverzeichnis !== null ) {
      img = data.Bilderverzeichnis.split(",");
      place.push(img[0]);
    }


    return (
      <div className="news-card shadow">
        {
          data.Bilderverzeichnis !== null ?
          <div className="newsImageC">
            <img className="newsImageG"
              src={ data.Bilderverzeichnis !== null ? 'http://157.230.106.121/files/' + place : ' '}
            />
          </div>
          : ''
        }


        <div className={this.state.class}>
          { data.Bilderverzeichnis !== null ? <Gallery data={data} open={this.state.open} handleClick={this.handleClick}/> : '' }
        </div>

        <div className="container">
          <p className="bold">{data.Titel}</p>
          <p className="primary-light date-size-n">{
            data.Datum.substring(8,10) + '.' +
            data.Datum.substring(5,7) + '.' +
            data.Datum.substring(0,4)
          }</p>
          <p className="container nopr nopl">
            {data.Bezeichnung}
          </p>
        </div>
      </div>
    );
  }
}
