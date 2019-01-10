import { FETCH_TERMINE, FETCH_EINSAETZE, FETCH_NEWS } from '../actions/type';

const initState =
    {
      loaded: {
        Mannschaft: false,
        Statistik: false,
        Einsätze: false,
        Termine: false,
        Kontakt: false,
        Notruf: false,
        Einsatzgebiet: false,
        Fahrzeuge: false,
        News: false,
      }
    }


export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_EINSAETZE:
      return  { loaded: { ...state.loaded, Einsätze: true, Statistik: true } }
    case FETCH_NEWS:
      return  { loaded: { ...state.loaded, News: true } }
    case FETCH_TERMINE:
      return  { loaded: { ...state.loaded, Termine: true } }
    default:
      return state;
  }
}
