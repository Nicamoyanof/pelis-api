
import * as actionTypes from "./SeriePage-types";

const INITIAL_STATE = {
  id: 15,
};

const idSerieRedux = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ID:
      state.id = action.payload.id;

      console.log(state.id)

      return {
        ...state,
        id: action.payload.id
      };
    default:
      return state;
  }
};

export default idSerieRedux;
