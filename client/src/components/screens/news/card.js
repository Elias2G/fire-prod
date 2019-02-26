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
    console.log(data);

    return (
      <div className="news-card shadow">
        <img className="placeholder_img"
          src={ data.Bilderverzeichnis !== null ? data.Bilderverzeichnis.split(",") : ' '}
        />
        <div className={this.state.class}>
          { data.Bilderverzeichnis !== null ? <Gallery data={data} open={this.state.open} handleClick={this.handleClick}/> : '' }
        </div>

        <div className="container">
          <p className="bold">{data.Bezeichnung}</p>
          <p className="primary-light date-size">{
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
