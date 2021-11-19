import "./styles.css";

import { useContext, useEffect } from 'react';

// import components
import { Banner } from '../../components/banner';
import { Navbar } from '../../components/navbar';
import FletnixContext from '../../context/fletnix-context';
import { MediaItems } from '../../data';
import { MediaList } from '../../components/media-list';

export const HomePage = () => {
  const globalState = useContext(FletnixContext);

  useEffect(
    () => {
      getMediaItems();
    }
  )

  const getMediaItems = async () => {
    try {
      const data = MediaItems;

      globalState.initializeMediaItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <MediaList title="Trending Now" />
      <MediaList title="Recommended for You" />
      <MediaList title="Popular on Fletnix" />
    </div>
  );
};
