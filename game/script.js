const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const scale = 30; // Size of each block
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// Create the game grid
const createGrid = (rows, columns) => Array.from({ length: rows }, () => Array(columns).fill(0));

let grid = createGrid(rows, columns);

// Tetromino shapes
const tetrominoes = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
};

// Randomly select a tetromino
const randomTetromino = () => {
  const keys = Object.keys(tetrominoes);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return tetrominoes[randomKey];
};

// Draw a single block
const drawBlock = (x, y, color = 'cyan') => {
  context.fillStyle = color;
  context.fillRect(x * scale, y * scale, scale, scale);
  context.strokeStyle = '#000';
  context.strokeRect(x * scale, y * scale, scale, scale);
};

// Draw the grid
const drawGrid = () => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col]) {
        drawBlock(col, row, 'cyan');
      }
    }
  }
};

// Draw the current tetromino
let tetromino = randomTetromino();
let position = { x: Math.floor(columns / 2) - 1, y: 0 };

const drawTetromino = () => {
  tetromino.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        drawBlock(position.x + x, position.y + y);
      }
    });
  });
};

// Move the tetromino down
const drop = () => {
  position.y++;
  if (collide()) {
    position.y--;
    merge();
    tetromino = randomTetromino();
    position = { x: Math.floor(columns / 2) - 1, y: 0 };
    if (collide()) {
      alert('Game Over!');
      grid = createGrid(rows, columns);
    }
  }
};

// Check for collisions
const collide = () => {
  for (let y = 0; y < tetromino.length; y++) {
    for (let x = 0; x < tetromino[y].length; x++) {
      if (
        tetromino[y][x] &&
        (grid[position.y + y] && grid[position.y + y][position.x + x]) !== 0
      ) {
        return true;
      }
    }
  }
  return false;
};

// Merge the tetromino into the grid
const merge = () => {
  tetromino.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        grid[position.y + y][position.x + x] = value;
      }
    });
  });
};

// Clear full rows
const clearRows = () => {
  grid.forEach((row, y) => {
    if (row.every((cell) => cell !== 0)) {
      grid.splice(y, 1);
      grid.unshift(Array(columns).fill(0));
    }
  });
};

// Update the game state
const update = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawTetromino();
  drop();
  clearRows();
};

// Game loop
setInterval(update, 1000);


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      position.x--;
      if (collide()) {
        position.x++;
      }
    } else if (event.key === 'ArrowRight') {
      position.x++;
      if (collide()) {
        position.x--;
      }
    } else if (event.key === 'ArrowDown') {
      drop();
    } else if (event.key === 'ArrowUp') {
      rotate();
    }
  });
  
  // Rotate the tetromino
  const rotate = () => {
    const rotated = tetromino[0].map((_, i) =>
      tetromino.map((row) => row[i]).reverse()
    );
    const prev = tetromino;
    tetromino = rotated;
    if (collide()) {
      tetromino = prev;
    }
  };
  let score = 0;
  let level = 1;
  
  const updateScore = (lines) => {
    const points = [0, 40, 100, 300, 1200];
    score += points[lines] * level;
    document.getElementById('score').innerText = score;
  
    // Increase level every 10 lines
    if (score >= level * 1000) {
      level++;
      document.getElementById('level').innerText = level;
    }
  };
  

