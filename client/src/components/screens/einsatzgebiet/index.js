import React, { Component } from 'react';

import Map from '../../images/einsatzgebiet.jpg';
import Ge from '../../images/headImage/Einsatzgebiete.jpg';

export default class Einsatzgebiet extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <img className="head_image" src={Ge}/>

        <div className="bg-secondary ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

          <div className="container-big">
            <h2 className="heading container-big">Einsatzgebiet</h2>
            <div className="container-big">
              <div className="row bg-secondary-light shadow">
                <div className="column col-md-4">
                  <p>
                    Unser Einsatzgebiet umfasst das gesamte Gemeindegebiet von Kappel am Krappfeld und 10km über die Gemeindegrenzen hinaus. <br />
                    Den Zuständigkeitsbereich in unserer Gemeinde teilen wir uns mit der FF Passering.
                  </p>
                </div>
                <div className="col-md-8 nop">
                  <img src={Map} />
                </div>
              </div>
            </div>


        </div>
      </div>
    );
  }
}
