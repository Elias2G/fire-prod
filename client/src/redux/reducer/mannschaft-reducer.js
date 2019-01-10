import { FETCH_MANNSCHAFT_F, FETCH_MANNSCHAFT_D, SAVE_MANNSCHAFT } from '../actions/type';
import _ from 'lodash';

const initState = [
  {
    "Nr":"04147",
    "Vorname":"Gerhard",
    "funktion":"KANTINE",
    "Kürzel":"FM",
    "Bezeichnung":"Kantineur"
  },
  {
    "Paß-Nr":"04147",
    "Vorname":"Gerhard",
    "funktion":"KRAFTF",
    "Kürzel":"FM",
    "Bezeichnung":"Kraftfahrer"
  }
]


export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_MANNSCHAFT_D:
      return action.data.map((data) => {
        return data
      })
    case FETCH_MANNSCHAFT_F:
      var old = state.map(data => (data.Name));
      var myNew = action.data.map(data => (data.Name));
      var obj = {};
      var array = [];

      for(var i = 0; i < action.data.length; i++) {
        state.map(data => {
          if(data.Name == action.data[i].Name) {
            console.log(data.Name);
            array.push(data.Bezeichnung);
          } else {

          }
        })
      }
      return
    default:
      return state;
  }
}
