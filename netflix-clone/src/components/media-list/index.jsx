import './styles.css';

import { useState } from 'react';
import { MediaCard } from '../media-card';

export const MediaList = (props) => {
  const [media, setMedia] = useState([
    { id: 1, name: "", image: "https://occ-0-1081-1722.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABT59GQE255BEOw3xIHh74LRLhWGmx4eVmno_5lPAoKbLeSYYUGfgEgShZUB6mr8tvr4uiIQYoJKCRa6HeErW9dc7SAeWGo3E0rUtgD-jlqSBctdhKv96NUjBHNKY.jpg?r=8a5" },
    { id: 1, name: "", image: "https://occ-0-1081-1722.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABT59GQE255BEOw3xIHh74LRLhWGmx4eVmno_5lPAoKbLeSYYUGfgEgShZUB6mr8tvr4uiIQYoJKCRa6HeErW9dc7SAeWGo3E0rUtgD-jlqSBctdhKv96NUjBHNKY.jpg?r=8a5" },
    { id: 1, name: "", image: "https://occ-0-1081-1722.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABT59GQE255BEOw3xIHh74LRLhWGmx4eVmno_5lPAoKbLeSYYUGfgEgShZUB6mr8tvr4uiIQYoJKCRa6HeErW9dc7SAeWGo3E0rUtgD-jlqSBctdhKv96NUjBHNKY.jpg?r=8a5" }
  ]);

  const { title } = props;

  return (
    <div className="media-list-container">
      <h2 className="media-list-title">{title}</h2>
      <ul className="media-list">
        {
          // create the list of media items as media cards
          media.map((item) => (
            <MediaCard key={item.id} name={item.name} image={item.image} />
          ))
        }
      </ul>
    </div>
  );
};
