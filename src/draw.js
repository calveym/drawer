window.onload = function () {

  var c = document.getElementById('canvas').getContext('2d');
  var tick = 0;
  var coords;
  var res = 32;
  var width = c.offsetWidth;
  var height = c.offsetHeight;


  function gameLoop() {
    tick++;
    if (tick === 1) {
      setup();
    }
    update();
    clear();
    draw(coords);
    requestAnimationFrame(gameLoop);
  }
  gameLoop();

  function setup() {
    coords = generateDataLoop();
  }

  function clear() {
    c.clearRect(0, 0, 1024, 512);
  }

  function draw(coords) {
    for (i = 0; i < coords.length; i++) {
      drawTile(coords[i]);
    }
  }

  function drawTile(tile) {
    c.fillStyle = "rgb(" + tile[2] + "," + tile[2] + "," + tile[2] + ")";
    c.fillRect(tile[0] * res, tile[1] * res, res, res);
  }

  function update() {

  }
};
