<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<title>Snake</title>
<style>
  body { margin:0; background:#111; color:#fff; font-family:sans-serif;
         display:flex; flex-direction:column; align-items:center; padding-top:20px; }
  canvas { background:#1b1b1b; border:2px solid #2ecc71; touch-action:none; }
  #score { font-size:20px; margin-bottom:10px; }
  button { margin-top:12px; padding:10px 24px; font-size:16px; border:0;
           border-radius:8px; background:#2ecc71; color:#111; }
</style>
</head>
<body>
<div id="score">Score: 0</div>
<canvas id="c" width="320" height="320"></canvas>
<button onclick="reset()">Restart</button>
<p style="opacity:.6">Arrow keys / WASD, or swipe</p>

<script>
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const size = 16, tiles = canvas.width / size;
let snake, dir, food, score, loop;

function reset() {
  snake = [{x:10, y:10}];
  dir = {x:1, y:0};
  score = 0;
  placeFood();
  document.getElementById('score').textContent = 'Score: 0';
  clearInterval(loop);
  loop = setInterval(tick, 120);
}

function placeFood() {
  do {
    food = {x: Math.floor(Math.random()*tiles), y: Math.floor(Math.random()*tiles)};
  } while (snake.some(s => s.x === food.x && s.y === food.y));
}

function tick() {
  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  if (head.x < 0 || head.y < 0 || head.x >= tiles || head.y >= tiles ||
      snake.some(s => s.x === head.x && s.y === head.y)) {
    clearInterval(loop);
    ctx.fillStyle = 'rgba(0,0,0,.7)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width/2, canvas.height/2);
    return;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
    placeFood();
  } else {
    snake.pop();
  }
  draw();
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(food.x*size, food.y*size, size-2, size-2);
  ctx.fillStyle = '#2ecc71';
  snake.forEach(s => ctx.fillRect(s.x*size, s.y*size, size-2, size-2));
}

function turn(x, y) {
  if (x !== -dir.x || y !== -dir.y) dir = {x, y};
}

document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k === 'arrowup' || k === 'w') turn(0,-1);
  if (k === 'arrowdown' || k === 's') turn(0,1);
  if (k === 'arrowleft' || k === 'a') turn(-1,0);
  if (k === 'arrowright' || k === 'd') turn(1,0);
});

let sx, sy;
canvas.addEventListener('touchstart', e => {
  sx = e.touches[0].clientX; sy = e.touches[0].clientY;
});
canvas.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - sx;
  const dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > Math.abs(dy)) turn(dx > 0 ? 1 : -1, 0);
  else turn(0, dy > 0 ? 1 : -1);
});

reset();
</script>
</body>
</html>
