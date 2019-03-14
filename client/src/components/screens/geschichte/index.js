import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ROOT_URL } from '../../../config';

import first from '../../images/geschichte/1929.jpg';
import second from '../../images/geschichte/ALTFeuerwehrhaus.jpg';
import third from '../../images/geschichte/NEUFeuerwehrhaus.jpg';
import fourth from '../../images/geschichte/Autobrand.jpg';
import fith from '../../images/geschichte/Fernsehbrand.jpg';
import sixth from '../../images/geschichte/Kutsche.jpg';

import Gallery from './gallery';

export default class Geschichte extends Component {

  componentWillMount() {
    window.scrollTo(0,0)
  }

  renderGallery = () => {
    var imageArray = [first, second, third, fourth, fith, sixth];

    return imageArray.map((data, i) => {
      return (
        <Gallery key={i} data={data} />
      );
    })
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Geschichte</title>
          <link rel="canonical" href={ROOT_URL + '/geschichte'} />
        </Helmet>

        <img className="head_image" src={require('../../images/headImage/head-image2.png')} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

          <div className="container-big">
            <h2 className="heading container-big">Geschichte der FF Kappel</h2>

            <div className="row">

              <div className="col-lg-12">
                <div className="timeline-container container-middle nop">
                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1908</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Gründung</h6>
                        <p className="timeline-ab">
                          Am 15. März 1908 wurde in Silberegg die Gründung einer Feuerwehr unter der Bezeichnung „Freiwillige Feuerwehr Silberegg-Kappel“ beschlossen. Bei dieser Gründung existierten bereits Ausrüstungsgegenstände, ob es sich dabei um eine private Institution der dortigen Gutsverwaltung oder eine regelrechte Feuerwehr gehandelt hat ist nicht bekannt.
                          <br /><br />
                          Zu diesem Zeitpunkt bestand in Silberegg bereits ein Rüsthaus, welches bis 1948 weiter verwendet wurde. Die damals üblichen pferdebespannten Wagen waren mit Spritzen, Schläuchen, usw. ausgestattet.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1927</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Rüsthaus</h6>
                        <p className="timeline-ab">
                          Um 1920 verlagerte sich das Geschehen immer mehr nach Kappel. So wurde 1927 ein neues Rüsthaus in Kappel errichtet.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1966</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Umbau</h6>
                        <p className="timeline-ab">
                          Umbau bzw. Neubau des Rüsthauses
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1985</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Zubau</h6>
                        <p className="timeline-ab">
                          Garagenzubau - heutiger Bauzustand
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">2007</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Umbau</h6>
                        <p className="timeline-ab">
                          Um allen Anforderungen der heutigen Zeit an die Feuerwehr gerecht zu werden, wurde im Jahre 2007 - 2008 das Rüsthaus umgebaut und auf den neuesten Rüsthausstandard gebracht.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-big">
              <div className="row">
                <div className="col-md-6 nop">
                  <h6 className="regular pd shadow container bg-secondary-light">
                    Ausrüstung der Feuerwehr
                  </h6>
                  <p className="timeline-ab shadow container bg-secondary-light">
                    Die Ausrüstung und Ausbildung der Kameraden werden immer wieder auf den neuesten Stand gebracht und entsprechend geschult. Dies zeigt sich in den letzten Jahren an den zahlreichen Kurs- und Seminarbesuchen an der Landesfeuerwehrschule.

                    Immer wichtiger werden bei den Einsätzen die Ausbildung und der persönliche Schutz der Einsatzkräfte mit schweren Atemschutzgeräten.

                    Auch werden bei den in der Feuerwehr durchgeführten Übungen immer wieder verschiedenste Szenarien geprobt, um für auftretende Ernstfälle bestens geschult und vorbereitet zu sein
                    <br /><br />
                    Besonders stolz ist die FF Kappel auf ihre pferdebespannte Kutsche(Spritze), welche bei den verschiedenen Festveranstaltungen und Umzügen heute noch immer im Einsatz steht.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="timeline-container container-middle nop">
                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1908</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Handspritze</h6>
                        <p className="timeline-ab">
                          Von 1908 – 1930 ein Zweispänner mit Handspritze
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1930</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Motorspritze</h6>
                        <p className="timeline-ab">
                          1930 die erste Motorspritze - noch auf Pferdewagen,
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">1932</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Das 1e</h6>
                        <p className="timeline-ab">
                          1932 das erste Feuerwehrauto
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="left">
                      <p className="primary black timeline-dot">Aktuell</p>
                    </div>
                    <div className="right">
                      <div className="bg-secondary-light timeline-card shadow">
                        <h6 className="regular">Fahrzeuge</h6>
                        <p className="timeline-ab">
                          Derzeit hat die Feuerwehr ein Schweres Löschfahrzeug, Mercedes 925 AF Atego (Bj 2005) und ein Tanklöschfahrzeug 2000 Mercedes 1329 / Atego Baujahr 2014,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-big">
              <div className="row">
                <div className="col-md-6 nop">
                  <h6 className="regular pd shadow container bg-secondary-light">
                    Unsere Kammeradschaft
                  </h6>
                  <p className="timeline-ab shadow container bg-secondary-light">
                    Als Beweis für die gute Kameradschaft innerhalb der Feuerwehr gilt die Tatsache, dass es in der Zeit von 1948–1972 mit Ernst PROPRENTNER und 1972–2003 mit Günther EGGER zwei langjährig dienende Kommandanten (Langzeitkommandanten) gegeben hat.

                    Beide waren auch in führenden Funktionen im Abschnitt Krappfeld-Metznitztal tätig.
                    <br /><br />
                    Die Feuerwehr Kappel/Krappfeld demonstriert ihre große Kameradschaft auch durch die Teilnahme bei den verschiedensten Festen und Feierlichkeiten sowie Umzügen als ein nicht unbedeutender kultureller und gesellschaftlicher Faktor .
                  </p>
                </div>
              </div>
            </div>

            <div className="row story-images">
              {this.renderGallery()}
            </div>

        </div>
      </div>
    );
  }
}
