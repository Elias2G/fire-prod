import { FETCH_NEWS } from '../actions/type';

const initState = [
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
    {
        Bezeichnung: "Übung",
        Datum: "2008-12-12",
        Bilderverzeichnis: 'mannschaft/na.gif',
        Beschreibung: 'testetset stet test stets est'
    },
  ]

export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_NEWS:
      return action.data.reverse()
    default:
      return state;
  }
}
