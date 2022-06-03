export const FETCH_JOB_LISTINGS = 'FETCH_JOB_LISTINGS';
export const SET_LOADING = 'SET_LOADING';
export const FILTER_ARRAY = 'FILTER_ARRAY';
export const ADD_TO_TAG = 'ADD_TO_TAG';
export const DELETE_FROM_TAG = 'DELETE_FROM_TAG';

export type AppContextType = {
  loading: boolean;
  jobListings: JobObjectType[];
  jobArray: JobObjectType[];
  fetchJobListings: () => Promise<void>;
  filterJobListings: (
    arryOne: JobObjectType[],
    arrayTwo: ArrayFilterType
  ) => void;
  tagArray: string[];
  jobListingsTagPositive: JobObjectType[];
  addToTag: (text: string) => void;
  deleteFromTag: (text: string) => void;
};

export type AppContextProps = {
  children: React.ReactNode;
};

export type JobObjectType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: boolean;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type AppStateTypes = {
  loading: boolean;
  jobListings: JobObjectType[] | null;
  tagArray: string[];
  jobListingsTagPositive: JobObjectType[];
  jobArray: JobObjectType[];
};

export type ArrayFilterType = string[];
