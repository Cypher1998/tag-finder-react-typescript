import { JobObjectType } from '../context/types';

type ListingProps = {
  listing: JobObjectType;
};

const Listing = ({ listing }: ListingProps) => {
  return (
    <div className="listingContainer">
      <div className="listingImage">
        <img src={listing.logo} alt="logo" />
      </div>
      <div className="listingDetails">
        <div className="divOne">
          <span>{listing.company}</span>
          {listing.new && <span>NEW!</span>}
          {listing.featured && <span>FEATURED</span>}
        </div>
        <p>{listing.position}</p>
        <div className="divTwo">
          <span>{listing.postedAt}</span>
          <span>{listing.contract}</span>
          <span>{listing.location}</span>
        </div>
      </div>
      <div className="listingTag">
        {[
          listing.role,
          listing.level,
          ...listing.languages,
          ...listing.tools,
        ].map((item, index) => (
          <div key={index} className="listingTagItem">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Listing;
