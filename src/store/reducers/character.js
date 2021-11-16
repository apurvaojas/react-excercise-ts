import { FETCH_CHARACTERS, RECEIVED_CHARACTERS_SUCCESS, RECEIVED_CHARACTERS_ERROR} from "../actionTypes";

const initialState = {
  isLoading: true,
  characters: [],
  originalCharacters: [],
  error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case RECEIVED_CHARACTERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        originalCharacters: action.payload,
        characters: action.payload
      };
    }
    case RECEIVED_CHARACTERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}
