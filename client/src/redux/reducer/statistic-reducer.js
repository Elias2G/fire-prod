import { FETCH_EINSAETZE } from '../actions/type';

const initState = [
  {
    year: '2003',
    einsätze: {
      Brandeinsatz: 5,
      Techn_Einsatz: 4,
      Techn_Hilfe: 27
    }
  },
  {
    year: '2004',
    einsätze: {
      Brandeinsatz: 34,
      Techn_Einsatz: 5,
      Techn_Hilfe: 25
    }
  },
]

export default function(state = initState, action) {
  switch(action.type) {
    case 'fetch_einsatz':

      var year = [];
      var pos = 0;
      var date = new Date().getFullYear();

      for(var i = 2003; i < date; i++) {
        year.push(i);
      }

      year.push(date);
      var brandN = 0;
      var technN = 0;

      var obj = {};

      action.data.map((data) => {
        var brand = data.Brandeinsatz;
        var techn = data.Techn_Einsatz || data.Techn_Hilfeleistung;

        if(data.Datum.substring(0,4) == year[pos]) {
          if(brand === 1) { brandN++ }
          if(techn === 1) { technN++ }
        } else {
          obj = { ...obj, [year[pos].toString()]: { 'Brandeinsatz': brandN, 'Techn_Einsatz': technN, 'Gesamt': brandN + technN } }
          brandN = 0;
          technN = 0;
          ++pos
        }
      });
      obj = { ...obj, [year[pos].toString()]: { 'Brandeinsatz': brandN, 'Techn_Einsatz': technN, 'Gesamt': brandN + technN  } }

      return (
        obj
      );
    default:
      return state;
  }
}
