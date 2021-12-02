const Gameboard = (coordinates) => {
  const gameboardArray = () => {
    const mainGameboard = [];
    for (let i = 0; i < 10; i++) {
      mainGameboard.push([]);
      for (let j = 0; j < 10; j++) {
        mainGameboard[i].push(["_"]);
      }
    }
    return mainGameboard;
  };

  return { gameboardArray };
};

const p1Gameboard = Gameboard();
console.log(p1Gameboard.gameboardArray());
