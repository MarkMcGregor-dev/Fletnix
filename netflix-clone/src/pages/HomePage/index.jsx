import "./styles.css";

// import components
import { Banner } from '../../components/banner';
import { Navbar } from '../../components/navbar';
import { MediaList } from '../../components/media-list';

export const HomePage = () => {

  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <MediaList title="Trending Now" mediaItemIds={[1, 2, 3, 4, 13, 14]} />
      <MediaList title="Recommended for You" mediaItemIds={[5, 6, 7, 8, 15, 16]} />
      <MediaList title="Popular on Fletnix" mediaItemIds={[9, 10, 11, 12, 17, 18]} />
    </div>
  );
};
