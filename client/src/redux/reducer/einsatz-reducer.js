import { FETCH_EINSAETZE, FETCH_EINSAETZE_PERSONEN } from '../actions/type';
import _ from 'lodash';

import { determine } from '../actions';

const initState = [
  {
    id: -1,
    Datum: '2003-01-10T23:00:00.000Z',
    Brandeinsatz: {
      type: 'buffer',
      data: [0],
    },
    Techn_Einsatz: {
      type: 'buffer',
      data: [0],
    },
    Techn_Hilfe: {
      type: 'buffer',
      data: [1],
    },
    Beginn: "1899-12-30T19:50:00.000Z",
    Ende: "1899-12-29T23:50:00.000Z",
    Dauer: 4,
    Ausrückungsgrund: "Wagenhüttenbrand",
    Einsatzort: "Guttaringberg",
  },
  {
    id: -1,
    Datum: '2003-01-10T23:00:00.000Z',
    Brandeinsatz: {
      type: 'buffer',
      data: [0],
    },
    Techn_Einsatz: {
      type: 'buffer',
      data: [0],
    },
    Techn_Hilfe: {
      type: 'buffer',
      data: [1],
    },
    Beginn: "1899-12-30T19:50:00.000Z",
    Ende: "1899-12-29T23:50:00.000Z",
    Dauer: 4,
    Ausrückungsgrund: "Wagenhüttenbrand",
    Einsatzort: "Guttaringberg",
  },
]




export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_EINSAETZE:
      return action.data;
    default:
      return state;
  }
}
