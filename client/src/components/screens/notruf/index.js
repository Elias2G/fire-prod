import React, { Component } from 'react';

//Head image
import headImage from '../.././images/headImage/head-image3.png'

export default class Notruf extends Component {
  render() {
    return (
      <div>
        <img className="head_image" src={headImage} />
          <div className="container-big">
            <h1 className="align-center heading">Notruf!</h1>

            <div className="row align-center">

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Feuerwehr</h6>
                  <p>122</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Polizei</h6>
                  <p>133</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Rettung</h6>
                  <p>144</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Bergrettung</h6>
                  <p>140</p>
                </div>
              </div>

          </div>
          <div className="row align-center">

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Wasserrettung</h6>
                  <p>130</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Euronotruf</h6>
                  <p>112</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Ärztnotdienst</h6>
                  <p>141</p>
                </div>
              </div>

              <div className="column col-lg-3 col-ms-6">
                <div className="shadow bg-secondary-light container">
                  <h6>Apothekennotruf</h6>
                  <p>14455</p>
                </div>
            </div>

          </div>

          <h2 className="align-center secondHeading">Notrufinformationen</h2>
             <div className="container-big align-center">
               <div className="container">
                 <p>Egal, welche Notrufnummer Sie wählen, der Hilferuf muss immer so präzise wie möglich
                   formuliert sein und sollte nicht vom Anrufer beendet werden. Als Hilfe dienen hier die 4 W´s:</p><br />
                   <h5><span>Wo</span> ist der Unfallort?</h5>
                   <h5><span>Was</span> ist passiert?</h5>
                   <h5><span>Wie Viele</span> wurden verletzt?</h5>
                   <h5><span>Wer</span> ruft an?</h5>
               </div>

                <div className="row">
                  <div className="col-lg-6 col-ml-6 bg-secondary-light align-left">
                    <h4 className="italic light important">Wichtig:</h4>
                    <p>In erster Linie muss man sich um die verletze Person kümmern und, wenn erforderlich, lebensrettende Sofortmaßnahmen setzen und danach erst telefonische Hilfe über die Notrufnummer anfordern. Versuchen Sie Ruhe zu bewahren und panische Reaktionen zu vermeiden. Verschaffen Sie sich einen Überblick über die Si­tuation. Sprechen Sie ruhig und langsam. Warten Sie immer auf Rückfragen. Wird unabsichtlich eine Notrufnummer gewählt, legen Sie nicht auf, sondern erklären Sie, dass es ein Versehen war.</p>
                  </div>
                  <div className="col-lg-6 col-ml-6 bg-secondary-light align-left">
                    <h4 className="italic light important">Wissenswertes zum Euronotruf:</h4>
                    <p>Wählt man den Euronotruf 112 in Österreich, gelangt man zur Sicherheitsexekutive, die je nach Notfall die zuständige Organisation alarmiert. Der Euronotruf ist österreichweit ohne SIM-Karte erreichbar, es ist jedoch kein Rückruf möglich. Der Euronotruf ist ohne PIN-Code Eingabe möglich. Wenn das Mobiltelefon keinen Empfang im eigenen Netz hat, wird automatisch über ein fremdes Netz vermittelt. Diese Notrufe haben Priorität und können nötigenfalls eine andere Verbindung trennen.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
