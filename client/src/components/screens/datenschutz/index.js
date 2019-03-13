import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ROOT_URL } from '../../../config';

import HomeImg from '../../images/headImage/Home.jpg';


export default class Datenschutz extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Datenschutz</title>
          <link rel="canonical" href={ROOT_URL + '/datenschutz'} />
        </Helmet>

        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
          <h1 className="adsimple-211088580 container-big">Datenschutzerklärung</h1>

          <p className="container-big">
            Wir haben diese Datenschutzerklärung (Fassung 08.03.2019-211088580) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und dem
            <a className="adsimple-211088580" href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=211088580"
            target="_blank"
            rel="noopener nofollow"
            className="external"
          >
          Datenschutzgesetz (DSG)
            </a>
          zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
          </p>

          <p className="container-big">
            Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
          </p>

          <h2 className="adsimple-211088580 container-big">
            Rechte laut Datenschutzgrundverordnung
          </h2>

          <p className="container-big">
            Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen
            <a
            className="adsimple-211088580"
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=211088580"
            target="_blank"
            rel="noopener nofollow"
            className="external">
            Datenschutzgesetzes (DSG)
            </a>
            grundsätzlich die folgende Rechte zu:
          </p>

          <ul className="adsimple-211088580 container-big">
            <li className="adsimple-211088580">Recht auf Berichtung (Artikel 16 DSGVO)</li>
            <li className="adsimple-211088580">Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
            <li className="adsimple-211088580">Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li className="adsimple-211088580">Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
            <li className="adsimple-211088580">Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
            <li className="adsimple-211088580">Widerspruchsrecht (Artikel 21 DSGVO)</li>
            <li className="adsimple-211088580">Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
          </ul>

          <p className="container-big">
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter <a className="adsimple-211088580" href="https://www.dsb.gv.at/?tid=211088580" className="external" rel="nofollow">https://www.dsb.gv.at/</a> finden.
          </p>
            <h2 className="adsimple-211088580 container-big">TLS-Verschlüsselung mit https</h2>
          <p className="container-big">
            Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a className="adsimple-211088580" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=211088580" target="_blank" rel="noopener nofollow" className="external">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
          </p>

          <h2 className="adsimple-211088580 container-big">Google Maps Datenschutzerklärung</h2>
          <p className="container-big">Wir verwenden Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) auf unserer Webseite.</p>
          <p className="container-big">Durch die Nutzung der Funktionen dieser Karte werden Daten an Google übertragen. Welche Daten von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auf <a className="adsimple-211088580" href="https://www.google.com/intl/de/policies/privacy/" className="external" rel="nofollow">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>
          <p className="container-big">Quelle: Erstellt mit dem <a title="Datenschutz Generator von firmenwebseiten.at" href="https://www.firmenwebseiten.at/datenschutz-generator/" target="_blank" rel="follow" >Datenschutz Generator von firmenwebseiten.at</a> in Kooperation mit <a href="https://www.holidao.at" target="_blank" rel="follow" title="" >holidao.at</a>
          </p>
        </div>


      </div>
    );
  }
}
