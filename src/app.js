import React, { useState, useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';
import Game from './Game';
import Leaderboard from './Leaderboard';
import HallOfFame from './HallOfFame';

function App() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkMiniKit = async () => {
      const installed = await MiniKit.isInstalled();
      setIsInstalled(installed);
      if (installed) {
        const currentUser = await MiniKit.getUser();
        setUser(currentUser);
      }
    };
    checkMiniKit();
  }, []);

  if (!isInstalled) {
    return <div>MiniKit is not installed.</div>;
  }

  if (!user) {
    return <div>Please log in to play.</div>;
  }

  return (
    <div>
      <h1>WLD Clicker Advanced</h1>
      <Game userId={user.id} />
      <Leaderboard />
      <HallOfFame />
    </div>
  );
}

export default App;