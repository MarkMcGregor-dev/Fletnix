import './styles.css';

import { useState, useEffect } from 'react';
import { MediaItems } from '../../data';

export const MediaCard = (props) => {
  const { id } = props;

  const [mediaItem, setMediaItem] = useState({});

  useEffect(
    () => {
      setMediaItem(MediaItems.find((item) => item.id === id));
    }, []
  )

  return (
    <div className="media-card">
      {
        mediaItem !== undefined && <img src={mediaItem.image} alt="" />
      }
    </div>
  );
};
