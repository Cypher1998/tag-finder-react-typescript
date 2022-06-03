import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Listing from './Listing';

const Listings = () => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    appContext?.fetchJobListings();
  }, []);

  useEffect(() => {
    appContext?.filterJobListings(
      appContext?.jobListings,
      appContext?.tagArray
    );
  }, [appContext?.tagArray]);

  // console.log(appContext?.loading);
  if (appContext?.loading) {
    return <Spinner />;
  }

  return (
    <div className="appListingsBody">
      {appContext?.jobArray &&
        appContext.jobArray.map((listing, index) => (
          <Listing key={index} listing={listing} />
        ))}
    </div>
  );
};
export default Listings;
