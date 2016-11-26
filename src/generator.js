function generateDataLoop() {
  coords = [];
  for (x = 0; x < 32; x++) {
    for (y = 0; y < 16; y++) {
      coords.push([x, y, returnRand()]);
    }
  }
  console.log("Iterating...\n");
  return coords;
}

function returnRand() {
  return Math.floor((Math.random() * 255) + 1);
}
