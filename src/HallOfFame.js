import React, { useState, useEffect } from 'react';

function HallOfFame() {
  const [topPlayer, setTopPlayer] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the top player from a backend
    // For this example, we'll use mock data
    const mockTopPlayer = { userId: 'user1', score: 1000 };
    setTopPlayer(mockTopPlayer);
  }, []);

  return (
    <div>
      <h2>Hall of Fame</h2>
      {topPlayer ? (
        <p>Current Champion: {topPlayer.userId} with {topPlayer.score} WLD</p>
      ) : (
        <p>No champion yet</p>
      )}
    </div>
  );
}

export default HallOfFame;