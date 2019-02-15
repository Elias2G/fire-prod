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

      action.data.map(data => {
        if(data.Status !== "F" && data.Status !== "T" && data.Status !== "V") {
          mannschaft.push(data);
        }
      })

      mannschaft.map((data, i) => {
        if( pos === mannschaft.length) {
          return gesamt;
        } else {
          if(i === mannschaft.length - 1) {

          } else {
            if(data.ID !== mannschaft[++i].ID) {

              for(var x = 0; x < mannschaft.length; x++) {
                if( data.ID === mannschaft[x].ID ) {
                  addMF.push(mannschaft[x].Bezeichnung)
                }
              }

              gesamt.push({ID: data.ID, funktionen: addMF})
              if(i === mannschaft.length - 1) {
                gesamt.push({ID: mannschaft[i].ID, funktionen: addMF})
              }

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
        if(gesamt[i].ID.includes(data.ID)) {
          if(data.ID === gesamt[i].ID) {
            finished.push(
              {
                ID: data.ID,
                Status: data.Status,
                Name: data.Name,
                Kürzel: data.Kürzel,
                Bez: data.Dienstgradbez,
                Funktion: gesamt[i].funktionen
              }
            )
            isThere = gesamt[i].ID;
            return;
          }
        } else {

        }

      }
      if(isThere !== data.ID) {
        finished.push(
          {
            ID: data.ID,
            Status: data.Status,
            Name: data.Name,
            Kürzel: data.Kürzel,
            Bez: data.Dienstgradbez,
          }
        )
      }

    })

    return finished;

    default:
      return state;
  }
}
