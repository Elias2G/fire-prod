import React, { Component } from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
//
// const position = [51.505, -0.09]
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
// )

export default class Notruf extends Component {
  render() {
    return (
      <div>
        <img className="head_image" />
          <div className="container-big">
            <h1 className="align-center heading">Kontakt</h1>
            <div className="row">
              <div className="column col-lg-4 col-md-6 shadow bg-secondary-light container">
                <h3>Kommandant:</h3>
                <h6 className="regular align-left">OBI Thomas Köfer</h6>
                <p className="align-left">
                  Sandstrasse 1<br />
                  9321 Kappel am Krappfeld<br />
                  Handy: 0664/32 19 337<br />
                  E-Mail: Thomas.koefer@aon.at
                </p>
              </div>
              <div className="column col-lg-4 col-md-6 shadow bg-secondary-light container">
                <h3>Kommandant-Stv:</h3>
                <h6 className="regular align-left">BI Guido MOGY</h6>
                <p className="align-left">
                  Edling<br />
                  9321 Kappel am Krappfeld<br />
                  Handy: 0664/25 52 412<br />
                  E-Mail: mogy.g@drei.at
                </p>
              </div>
              <div className="column col-lg-4 col-md-6 shadow bg-secondary-light container">
                <h3>Rüsthaus:</h3>
                <p className="align-left">
                  Silberbachstraße 2<br />
                  9321 Kappel am Krappfeld
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
