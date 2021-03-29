import {Reducer} from 'redux';
import {UsersState, UsersTypes} from './types';

const INITIAL_STATE: UsersState = {
  data: [{id: '1', email: 'teste', password: '123'}],
  error: false,
  loading: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UsersTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case UsersTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
