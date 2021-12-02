const Ship = (name, hitLocation) => {
  const hit = (index) => {
    if (typeof index !== "number") {
      throw new Error("Index must be a number");
    }
    if (hitLocation[index] === 1) {
      throw new Error("You already hit that spot");
    }
    if (index < 0 || index > hitLocation.length - 1) {
      throw new Error("Index out of bounds");
    }
    hitLocation.splice(index, 1, 1);
    return "Ship was hit";
  };

  const isSunk = () => {
    if (hitLocation.includes(0)) {
      return false;
    }
    return true;
  };

  const shipLength = () => {
    return hitLocation.length;
  };

  const shipName = () => {
    return name;
  };
  
  


  return { shipName, hitLocation, hit, isSunk, shipLength };
};

module.exports = Ship;
