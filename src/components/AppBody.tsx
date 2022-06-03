import Listings from './Listings';
import TagInput from './TagInput';

const AppBody = () => {
  return (
    <main className="appBody">
      <div className="appWrapper">
        <TagInput />
        <Listings />
      </div>
    </main>
  );
};
export default AppBody;
