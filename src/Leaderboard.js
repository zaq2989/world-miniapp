import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch the leaderboard data from a backend
    // For this example, we'll use mock data
    const mockLeaderboard = [
      { id: 1, userId: 'user1', score: 1000 },
      { id: 2, userId: 'user2', score: 900 },
      { id: 3, userId: 'user3', score: 800 },
      { id: 4, userId: 'user4', score: 700 },
      { id: 5, userId: 'user5', score: 600 },
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map(entry => (
          <li key={entry.id}>
            {entry.userId}: {entry.score} WLD
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;