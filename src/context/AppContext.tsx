import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import {
  AppStateTypes,
  ArrayFilterType,
  JobObjectType,
  AppContextType,
  AppContextProps,
  FETCH_JOB_LISTINGS,
  SET_LOADING,
  FILTER_ARRAY,
  DELETE_FROM_TAG,
  ADD_TO_TAG,
} from './types';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: AppContextProps) => {
  const initialState: AppStateTypes = {
    loading: true,
    jobListings: [],
    tagArray: [],
    jobListingsTagPositive: [],
    jobArray: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchJobListings = async () => {
    dispatch({ type: SET_LOADING });

    const jobListings = await axios('data.json');

    dispatch({ type: FETCH_JOB_LISTINGS, payload: jobListings.data });
  };

  const filterJobListings = (
    arrayOne: JobObjectType[],
    arrayTwo: ArrayFilterType
  ) => {
    dispatch({ type: SET_LOADING });
    const result = arrayOne.map(
      (item) =>
        arrayTwo.every((el) =>
          [
            ...item.languages,
            ...item.tools,
            item.role.toLowerCase(),
            item.level,
          ]
            .join('-')
            .toLowerCase()
            .split('-')
            .includes(el.toLowerCase())
        ) && item
    );

    const newArray = result?.filter((ad) => ad !== false);

    dispatch({ type: FILTER_ARRAY, payload: newArray });
  };

  const addToTag = (text: string) => {
    dispatch({ type: ADD_TO_TAG, payload: text });
  };

  const deleteFromTag = (text: string) => {
    dispatch({ type: DELETE_FROM_TAG, payload: text });
  };

  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        jobListings: state.jobListings,
        jobListingsTagPositive: state.jobListingsTagPositive,
        tagArray: state.tagArray,
        jobArray:
          state.tagArray.length > 0
            ? state.jobListingsTagPositive
            : state.jobListings,
        fetchJobListings,
        filterJobListings,
        addToTag,
        deleteFromTag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
