import React, { useState } from 'react';

const FletnixContext = React.createContext({
  mediaItems: [],
  initializeMediaItems: () => { }
});

export const FletnixContextProvider = (props) => {
  const [mediaItems, setMediaItems] = useState([]);

  return (
    <FletnixContext.Provider
      value={{ mediaItems: mediaItems, initializeMediaItems: initializeMediaItems }}
    >
      {props.children}
    </FletnixContext.Provider>
  );
};

export default FletnixContext;
