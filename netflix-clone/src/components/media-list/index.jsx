import './styles.css';

import { MediaCard } from '../media-card';

export const MediaList = (props) => {

  const { title, mediaItemIds } = props;

  return (
    <div className="media-list-container">
      <h2 className="media-list-title">{title}</h2>
      <ul className="media-list">
        {
          // create the list of media items as media cards
          mediaItemIds.map((id) => (
            < MediaCard id={id} />
          ))
        }
      </ul>
    </div>
  );
};
