import React, { useEffect } from 'react';
import './App.css';
import HomeScreen125171 from './screens/HomeScreen125171';

/**
 * PUBLIC_INTERFACE
 * App
 * Renders the Figma-accurate Home Screen at root path.
 * If routing is introduced later, this component will serve as the route container.
 */
function App() {
  useEffect(() => {
    // Ensure base document background matches the design's background
    document.documentElement.style.background = '#252525';
    document.body.style.background = '#252525';
  }, []);

  return (
    <div className="App">
      <HomeScreen125171 />
    </div>
  );
}

export default App;
