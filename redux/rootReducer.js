import { combineReducers } from "redux";
import idSerieRedux from "./SeriePage/SeriePage-reducer";


const rootReducer = combineReducers({
  idSerie: idSerieRedux,
});

export default rootReducer;
