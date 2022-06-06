import { JobObjectType } from '../context/types';

type ListingProps = {
  listing: JobObjectType;
};

const Listing = ({ listing }: ListingProps) => {
  return (
    <div className={`listingContainer ${listing.featured && 'featuredBorder'}`}>
      <div className="sublistingContainer">
        <div className="listingImage">
          <img src={listing.logo} alt="logo" />
        </div>
        <div className="listingDetails">
          <div className="divOne">
            <span className="company">{listing.company}</span>
            {listing.new && <span className="new">NEW!</span>}
            {listing.featured && <span className="featured">FEATURED</span>}
          </div>
          <p>{listing.position}</p>
          <ul className="divTwo">
            <li>{listing.postedAt}</li>
            <li>{listing.contract}</li>
            <li>{listing.location}</li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="listingTag">
        {[
          listing.role,
          listing.level,
          ...listing.languages,
          ...listing.tools,
        ].map((item, index) => (
          <p key={index} className="listingTagItem">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Listing;
