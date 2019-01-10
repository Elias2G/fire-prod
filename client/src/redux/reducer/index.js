import { combineReducers } from 'redux';

import einsatzReducer from './einsatz-reducer';
import mannschaftReducer from './mannschaft-reducer';
import statisticReducer from './statistic-reducer';
import terminReducer from './termin-reducer';
import newsReducer from './news-reducer';
import loadedReducer from './loaded-reducer';

const rootReducer = combineReducers({
  einsätze: einsatzReducer,
  mannschaft: mannschaftReducer,
  statistic: statisticReducer,
  termine: terminReducer,
  news: newsReducer,
  loaded: loadedReducer
});

export default rootReducer;
