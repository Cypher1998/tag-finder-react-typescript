import {
  FETCH_JOB_LISTINGS,
  SET_LOADING,
  FILTER_ARRAY,
  ADD_TO_TAG,
  DELETE_FROM_TAG,
} from './types';
import { AppStateTypes, JobObjectType } from './types';

type GetListings = {
  type: string;
  payload?: JobObjectType[] | (JobObjectType | boolean)[] | string;
};

const AppReducer = (state: any, action: GetListings) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOB_LISTINGS:
      return {
        ...state,
        jobListings: action.payload,
        loading: false,
      };

    case FILTER_ARRAY:
      return {
        ...state,
        loading: false,
        jobListingsTagPositive: action.payload,
      };

    case ADD_TO_TAG:
      return {
        ...state,
        tagArray: [...state.tagArray, action.payload],
      };

    case DELETE_FROM_TAG:
      return {
        ...state,
        tagArray: state.tagArray.filter(
          (item: string) => item !== action.payload
        ),
      };

    default:
      break;
  }
};

export default AppReducer;
