import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeImg from '../../images/headImage/Home.jpg';

export default class impressum extends Component {
  render() {
    return (
      <div>
        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="container-big">
        <h1 className="container-big">Impressum</h1>

        <div className="container-big">
          <h6>Verantwortlich für den Inhalt</h6>
          <p className="mpb">
            Es wird keinerlei Haftung für den Inhalt, insbesondere für die Richtigkeit, Vollständigkeit und Aktualität der Homepage und der Website übernommen. Irrtümer werden vorbehalten. Dieser Haftungsausschluss gilt auch für verlinkte Seiten.
          </p>

          <h6>Firma Name</h6>
          <p className="mpb">
            Straße <br />
            PLZ Ort <br /><br />
            Telefon <br />
            E-Mail <br />
            website <br />
          </p>

          <h6>Konzept, Layout und Umsetzung</h6>
          <p className="mpb">
            design in time werbeagentur e.U.
          </p>

          <h6>Bildbearbeitung</h6>
          <p className="mpb">
            design in time werbeagentur e.U.
          </p>

        </div>




        </div>
      </div>
    );
  }
}
