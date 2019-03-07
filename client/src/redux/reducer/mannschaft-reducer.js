import { FETCH_MANNSCHAFT_F, FETCH_MANNSCHAFT_D, SAVE_MANNSCHAFT } from '../actions/type';
import _ from 'lodash';

const initState = [
  {
    first: [
      {
        "ID": 1,
        "Nr":"04147",
        "Vorname":"Gerhard",
        "funktion":"KANTINE",
        "Kürzel":"FM",
        "Bezeichnung":"Kantineur"
      },
      {
        "ID": 1,
        "Paß-Nr":"04147",
        "Vorname":"Gerhard",
        "funktion":"KRAFTF",
        "Kürzel":"FM",
        "Bezeichnung":"Kraftfahrer"
      }
    ]
  },
  {
    second: [
      {
        "ID": 1,
        "Nr":"04147",
        "Vorname":"Gerhard",
        "funktion":"KANTINE",
        "Kürzel":"FM",
        "Bezeichnung":"Kantineur"
      },
      {
        "ID": 1,
        "Paß-Nr":"04147",
        "Vorname":"Gerhard",
        "funktion":"KRAFTF",
        "Kürzel":"FM",
        "Bezeichnung":"Kraftfahrer"
      }
    ]
  }

]


export default function(state = initState, action) {
  switch(action.type) {
    case FETCH_MANNSCHAFT_D:
    var mannschaft = [];

      action.data.map((data) => {

        if(data.Status !== "T" && data.Status !== "F" && data.Status !== "V") {
          mannschaft.push(data);
        }
      })
      return mannschaft;

    case FETCH_MANNSCHAFT_F:
      var mannschaft = [];
      var gesamt = [];
      var addMF = [];
      var pos = 0;
      console.log(action.data);
      action.data.map(data => {
        if(data.Status !== "F" && data.Status !== "T" && data.Status !== "V" && data.not === 0) {
          mannschaft.push(data);
        }
      })

      mannschaft.map((data, i) => {
        if( i === mannschaft.length - 1) {
          console.log('hi');
          return gesamt;
        } else {
          if(i === mannschaft.length - 1) {

          } else {
            if(data.id !== mannschaft[++i].id) {
              for(var x = 0; x < mannschaft.length; x++) {
                if( data.id === mannschaft[x].id ) {
                  addMF.push(mannschaft[x].Bezeichnung)
                }
              }
              gesamt.push({id: data.id, funktionen: addMF})
              if(i === mannschaft.length - 1) {
                gesamt.push({id: mannschaft[i].id, funktionen: addMF})
              }
              ++pos
              addMF = [];
            }
          }
        }
      })

    var finished = [];
    var isThere = 0;
    var yep;

    state.map(data => {
      for(var i = 0; i < gesamt.length; i++) {
        if(gesamt[i].id.includes(data.id)) {
          if(data.id === gesamt[i].id) {
            finished.push(
              {
                id: data.id,
                Status: data.Status,
                Name: data.Name,
                Kürzel: data.Kürzel,
                Bez: data.Dienstgradbez,
                Funktion: gesamt[i].funktionen,
                Reihung: data.Reihung,
                img: data.Bilderverzeichnis,
              }
            )
            isThere = gesamt[i].id;
            return;
          }
        }
      }
      if(isThere !== data.id) {
        finished.push(
          {
            id: data.id,
            Status: data.Status,
            Name: data.Name,
            Kürzel: data.Kürzel,
            Bez: data.Dienstgradbez,
            Reihung: data.Reihung,
            img: data.Bilderverzeichnis
          }
        )
      }

    })

    return finished;

    default:
      return state;
  }
}
