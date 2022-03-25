import * as actionTypes from "./SeriePage-types";

export const getId = (id) => {
    return {
      type: actionTypes.GET_ID,
      payload: {
        id 
      },
    };
  };