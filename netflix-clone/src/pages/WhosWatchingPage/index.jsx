import "./styles.css";

import { useState, useEffect } from 'react';

// component imports
import { WhosWatchingProfile } from '../../components/whos-watching-profile';
import { Profiles } from '../../data';

export const WhosWatchingPage = () => {

  const [profiles, setProfiles] = useState([]);

  useEffect(
    () => {
      getProfiles();
    }, []
  );

  const getProfiles = async () => {
    const data = Profiles;

    setProfiles(data);
  };

  return (
    <div className="whos-watching-page">
      <h1 className="fletnix-logo">FLETNIX</h1>

      <div className="profile-container">
        <h1 className="whos-watching-title">Who's watching?</h1>
        <ul className="profile-list">
          {
            profiles.map((profile) => (
              <li><WhosWatchingProfile key={profile.id} name={profile.name} image={profile.image} /></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
};
