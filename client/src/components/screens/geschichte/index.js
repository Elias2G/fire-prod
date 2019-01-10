import React, { Component } from 'react';

export default class Geschichte extends Component {
  render() {
    return (
      <div>
        <img className="head_image" src={require('../../images/headImage/head-image2.png')} />
          <div className="container-big">
            <h1 className="align-center heading">Geschichte</h1>
            <div className="row">
              <div className="bg-secondary-light container">
                <div className="row">
                  <div className="col-lg-7">
                    Am 15. März 1908 wurde in Silberegg die Gründung einer Feuerwehr unter der Bezeichnung „Freiwillige Feuerwehr Silberegg-Kappel“ beschlossen. Bei dieser Gründung existierten bereits Ausrüstungsgegenstände, ob es sich dabei um eine private Institution der dortigen Gutsverwaltung oder eine regelrechte Feuerwehr gehandelt hat ist nicht bekannt.
                  </div>
                  <div className="col-lg-5">
                    <img src={require('../../images/geschichte/1929.jpg')} />
                  </div>
                </div>
              </div>

              <div className="bg-secondary-light container">
                <div className="row">
                  <div className="col-lg-5">
                    <img src={require('../../images/geschichte/ALTFeuerwehrhaus.jpg')} />
                  </div>
                  <div className="col-lg-7">
                    Zu diesem Zeitpunkt bestand in Silberegg bereits ein Rüsthaus, welches bis 1948 weiter verwendet wurde. Die damals üblichen pferdebespannten Wagen waren mit Spritzen, Schläuchen, usw. ausgestattet. <br />
                    Um 1920 verlagerte sich das Geschehen immer mehr nach Kappel. So wurde 1927 ein neues Rüsthaus in Kappel errichtet.
                  </div>
                </div>
              </div>

              <div className="bg-secondary-light container">
                	<ul className="geschichteList">
                    <div className="row">
                      <div className="col-lg-7">
                        <li>1908 Gründung der FF Kappel- Silberegg , Rüsthaus in Silberegg <br /> (Nutzung bis 1948) </li>
                        <li>1927 Bau eines Rüsthauses in Kappel </li>
                        <li>1966 Umbau bzw. Neubau des Rüsthauses </li>
                        <li>1985 Garagenzubau - heutiger Bauzustand </li>
                        <li>2007/2008 Umbau und teilweise Erneuerung des Rüsthauses</li>
                      </div>
                      <div className="col-lg-5">
                        <img src={require('../../images/geschichte/NEUFeuerwehrhaus.jpg')} />
                      </div>
                    </div>
                  </ul>
              </div>
              <div className="bg-secondary-light container">
                <div className="row">
                  <div className="col-lg-5">
                    <img src={require('../../images/geschichte/Autobrand.jpg')} />
                  </div>
                  <div className="col-lg-7">
                    Um allen Anforderungen der heutigen Zeit an die Feuerwehr gerecht zu werden, wurde im Jahre 2007 - 2008 das Rüsthaus umgebaut und auf den neuesten Rüsthausstandard gebracht.
                  </div>
                </div>
              </div>
              <div className="bg-secondary-light container">
                <div className="row">
                  <div className="col-lg-7">
                    Die Ausrüstung und Ausbildung der Kameraden werden immer wieder auf den neuesten Stand gebracht und entsprechend geschult. Dies zeigt sich in den letzten Jahren an den zahlreichen Kurs- und Seminarbesuchen an der Landesfeuerwehrschule. <br />
                    Immer wichtiger werden bei den Einsätzen die Ausbildung und der persönliche Schutz der Einsatzkräfte mit schweren Atemschutzgeräten. <br />
                    Auch werden bei den in der Feuerwehr durchgeführten Übungen immer wieder verschiedenste Szenarien geprobt, um für auftretende Ernstfälle bestens geschult und vorbereitet zu sein <br />
                      <div className="bg-secondary-light container">
                		    <h6>Ausrüstung der Feuerwehr</h6>
                          <ul className="geschichteList">
                            <li>Von 1908 – 1930 ein Zweispänner mit Handspritze </li>
                            <li>1930 die erste Motorspritze - noch auf Pferdewagen </li>
                            <li>1932 das erste Feuerwehrauto </li>
                          </ul><br />
                        <h6>Derzeit hat die Feuerwehr:</h6>
                          <ul className="geschichteList">
                            <li>ein Schweres Löschfahrzeug, Mercedes 925 AF Atego (Bj 2005)</li>
                            <li>ein Tanklöschfahrzeug 2000, Steyr 690 (Bj 1986)</li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-lg-5">
                    <img src={require('../../images/geschichte/Fernsehbrand.jpg')} />
                  </div>
                  </div>
                </div>

              <div className="bg-secondary-light container">
                <div className="row">
                  <div className="col-lg-5">
                    <img src={require('../../images/geschichte/Kutsche.jpg')} />
                  </div>
                  <div className="col-lg-7">
                    Besonders stolz ist die FF Kappel auf ihre pferdebespannte Kutsche(Spritze), welche bei den verschiedenen Festveranstaltungen und Umzügen heute noch immer im Einsatz steht.  <br />
                    Als Beweis für die gute Kameradschaft innerhalb der Feuerwehr gilt die Tatsache, dass es in der Zeit von 1948–1972 mit Ernst PROPRENTNER.  <br />
                    und 1972–2003 mit Günther EGGER zwei langjährig dienende Kommandanten (Langzeitkommandanten) gegeben hat. <br />
                    Beide waren auch in führenden Funktionen im Abschnitt Krappfeld-Metznitztal tätig.
                    <br /> <br />
                    Die Feuerwehr Kappel/Krappfeld demonstriert ihre große Kameradschaft auch durch die Teilnahme bei den verschiedensten Festen und Feierlichkeiten sowie Umzügen als ein nicht unbedeutender kultureller und gesellschaftlicher Faktor.
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
// import { Timeline, TimelineItem } from '../../reusable/timeline/';
//
// export default class Geschichte extends Component {
//   render() {
//     return (
//       <div>
//         <img className="head_image" src={require('../../images/headImage/head-image2.png')} />
//           <div className="container-big">
//             <h1 className="align-center heading">Geschichte</h1>
//             <div className="row">
//               <div className="bg-secondary-light container">
//                 const timelineElements = [
//   <TimelineItem
//     key="001"
//     dateText="11/2010 – Present"
//     style={{ color: '#e86971' }}
//   >
//     <h3>Title, Company</h3>
//     <h4>Subtitle</h4>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//   </TimelineItem>,
//   <TimelineItem
//     key="002"
//     dateText="04/2009 – 11/2010"
//     dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
//     bodyContainerStyle={{
//       background: '#ddd',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
//     }}
//   >
//     <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
//     <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//   </TimelineItem>,
//   <TimelineItem
//     key="003"
//     // eslint-disable-next-line prettier/prettier
//     dateComponent={(
//       <div
//         style={{
//           display: 'block',
//           float: 'left',
//           padding: '10px',
//           background: 'rgb(150, 150, 150)',
//           color: '#fff',
//         }}
//       >
//         11/2008 – 04/2009
//       </div>
//       // eslint-disable-next-line prettier/prettier
//     )}
//   >
//     <h3>Title, Company</h3>
//     <h4>Subtitle</h4>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//   </TimelineItem>,
//   <TimelineItem
//     key="004"
//     dateText="08/2008 – 11/2008"
//     dateInnerStyle={{ background: '#76bb7f' }}
//   >
//     <h3>Title, Company</h3>
//     <h4>Subtitle</h4>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//     <p>
//       Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
//       exercitation. Veniam velit adipisicing anim excepteur nostrud magna
//       nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
//       reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
//       est.
//     </p>
//   </TimelineItem>,
// ];
//                 <div className="row">
//                   <div className="col-lg-7">
//                     Am 15. März 1908 wurde in Silberegg die Gründung einer Feuerwehr unter der Bezeichnung „Freiwillige Feuerwehr Silberegg-Kappel“ beschlossen. Bei dieser Gründung existierten bereits Ausrüstungsgegenstände, ob es sich dabei um eine private Institution der dortigen Gutsverwaltung oder eine regelrechte Feuerwehr gehandelt hat ist nicht bekannt.
//                   </div>
//                   <div className="col-lg-5">
//                     <img src={require('../../images/geschichte/1929.jpg')} />
//                   </div>
//                 </div>
//               </div>
//
//               <div className="bg-secondary-light container">
//                 <div className="row">
//                   <div className="col-lg-5">
//                     <img src={require('../../images/geschichte/ALTFeuerwehrhaus.jpg')} />
//                   </div>
//                   <div className="col-lg-7">
//                     Zu diesem Zeitpunkt bestand in Silberegg bereits ein Rüsthaus, welches bis 1948 weiter verwendet wurde. Die damals üblichen pferdebespannten Wagen waren mit Spritzen, Schläuchen, usw. ausgestattet. <br />
//                     Um 1920 verlagerte sich das Geschehen immer mehr nach Kappel. So wurde 1927 ein neues Rüsthaus in Kappel errichtet.
//                   </div>
//                 </div>
//               </div>
//
//               <div className="bg-secondary-light container">
//                 	<ul className="geschichteList">
//                     <div className="row">
//                       <div className="col-lg-7">
//                         <li>1908 Gründung der FF Kappel- Silberegg , Rüsthaus in Silberegg <br /> (Nutzung bis 1948) </li>
//                         <li>1927 Bau eines Rüsthauses in Kappel </li>
//                         <li>1966 Umbau bzw. Neubau des Rüsthauses </li>
//                         <li>1985 Garagenzubau - heutiger Bauzustand </li>
//                         <li>2007/2008 Umbau und teilweise Erneuerung des Rüsthauses</li>
//                       </div>
//                       <div className="col-lg-5">
//                         <img src={require('../../images/geschichte/NEUFeuerwehrhaus.jpg')} />
//                       </div>
//                     </div>
//                   </ul>
//               </div>
//               <div className="bg-secondary-light container">
//                 <div className="row">
//                   <div className="col-lg-5">
//                     <img src={require('../../images/geschichte/Autobrand.jpg')} />
//                   </div>
//                   <div className="col-lg-7">
//                     Um allen Anforderungen der heutigen Zeit an die Feuerwehr gerecht zu werden, wurde im Jahre 2007 - 2008 das Rüsthaus umgebaut und auf den neuesten Rüsthausstandard gebracht.
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-secondary-light container">
//                 <div className="row">
//                   <div className="col-lg-7">
//                     Die Ausrüstung und Ausbildung der Kameraden werden immer wieder auf den neuesten Stand gebracht und entsprechend geschult. Dies zeigt sich in den letzten Jahren an den zahlreichen Kurs- und Seminarbesuchen an der Landesfeuerwehrschule. <br />
//                     Immer wichtiger werden bei den Einsätzen die Ausbildung und der persönliche Schutz der Einsatzkräfte mit schweren Atemschutzgeräten. <br />
//                     Auch werden bei den in der Feuerwehr durchgeführten Übungen immer wieder verschiedenste Szenarien geprobt, um für auftretende Ernstfälle bestens geschult und vorbereitet zu sein <br />
//                       <div className="bg-secondary-light container">
//                 		    <h6>Ausrüstung der Feuerwehr</h6>
//                           <ul className="geschichteList">
//                             <li>Von 1908 – 1930 ein Zweispänner mit Handspritze </li>
//                             <li>1930 die erste Motorspritze - noch auf Pferdewagen </li>
//                             <li>1932 das erste Feuerwehrauto </li>
//                           </ul><br />
//                         <h6>Derzeit hat die Feuerwehr:</h6>
//                           <ul className="geschichteList">
//                             <li>ein Schweres Löschfahrzeug, Mercedes 925 AF Atego (Bj 2005)</li>
//                             <li>ein Tanklöschfahrzeug 2000, Steyr 690 (Bj 1986)</li>
//                           </ul>
//                       </div>
//                   </div>
//
//                   <div className="col-lg-5">
//                     <img src={require('../../images/geschichte/Fernsehbrand.jpg')} />
//                   </div>
//                   </div>
//                 </div>
//
//               <div className="bg-secondary-light container">
//                 <div className="row">
//                   <div className="col-lg-5">
//                     <img src={require('../../images/geschichte/Kutsche.jpg')} />
//                   </div>
//                   <div className="col-lg-7">
//                     Besonders stolz ist die FF Kappel auf ihre pferdebespannte Kutsche(Spritze), welche bei den verschiedenen Festveranstaltungen und Umzügen heute noch immer im Einsatz steht.  <br />
//                     Als Beweis für die gute Kameradschaft innerhalb der Feuerwehr gilt die Tatsache, dass es in der Zeit von 1948–1972 mit Ernst PROPRENTNER.  <br />
//                     und 1972–2003 mit Günther EGGER zwei langjährig dienende Kommandanten (Langzeitkommandanten) gegeben hat. <br />
//                     Beide waren auch in führenden Funktionen im Abschnitt Krappfeld-Metznitztal tätig.
//                     <br /> <br />
//                     Die Feuerwehr Kappel/Krappfeld demonstriert ihre große Kameradschaft auch durch die Teilnahme bei den verschiedensten Festen und Feierlichkeiten sowie Umzügen als ein nicht unbedeutender kultureller und gesellschaftlicher Faktor.
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
// }
