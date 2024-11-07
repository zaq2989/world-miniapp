import React, { useState, useEffect } from 'react';
import { ethers, parseEther, formatEther } from 'ethers';

function Game({ userId }) {
  const [wld, setWld] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickerCount, setAutoClickerCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWld(prevWld => prevWld + autoClickerCount);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClickerCount]);

  const handleClick = () => {
    setWld(prevWld => prevWld + clickPower);
  };

  const buyAutoClicker = () => {
    if (wld >= 10) {
      setWld(prevWld => prevWld - 10);
      setAutoClickerCount(prevCount => prevCount + 1);
    }
  };

  const upgradeClickPower = () => {
    if (wld >= 50) {
      setWld(prevWld => prevWld - 50);
      setClickPower(prevPower => prevPower * 2);
    }
  };

  const submitScore = async () => {
    if (wld < 10) {
      alert('You need at least 10 WLD to submit your score.');
      return;
    }

    try {
      // Here you would typically interact with a smart contract
      // For this example, we'll just simulate the transaction
      const fee = parseEther('10');
      const topPlayerReward = fee * BigInt(20) / BigInt(100);
      const operatorFee = fee - topPlayerReward;

      // Simulate sending fees
      setWld(prevWld => prevWld - 10);

      // Update leaderboard (this would typically be done on the backend)
      // For this example, we'll just log the action
      console.log(`Score submitted: ${wld}`);
      console.log(`Top player receives: ${formatEther(topPlayerReward)} WLD`);
      console.log(`Operator receives: ${formatEther(operatorFee)} WLD`);

      alert('Score submitted successfully!');
    } catch (error) {
      console.error('Error submitting score:', error);
      alert('Error submitting score. Please try again.');
    }
  };

  return (
    <div>
      <h2>Game</h2>
      <p>User ID: {userId}</p>
      <p>WLD: {wld}</p>
      <button onClick={handleClick}>Click for WLD</button>
      <button onClick={buyAutoClicker} disabled={wld < 10}>Buy Auto Clicker (10 WLD)</button>
      <button onClick={upgradeClickPower} disabled={wld < 50}>Upgrade Click Power (50 WLD)</button>
      <button onClick={submitScore} disabled={wld < 10}>Submit Score (10 WLD)</button>
      <p>Auto Clickers: {autoClickerCount}</p>
      <p>Click Power: {clickPower}</p>
    </div>
  );
}

export default Game;