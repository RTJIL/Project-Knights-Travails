class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.coords = [x, y];
    this.visited = false;
    this.moves = [];
  }

  toString() {
    return `{${this.x},${this.y}}`;
  }
}

class Matrix {
  constructor(size) {
    this.size = size;
    this.matrix = this.build();
  }

  build() {
    const grid = [];
    for (let y = 0; y < this.size; y++) {
      const row = [];

      for (let x = 0; x < this.size; x++) {
        let node = new Node(x, y);
        row.push(node);
      }
      grid.push(row);
    }
    return grid;
  }

  printMatrix() {
    for (let y = this.matrix.length - 1; y >= 0; y--) {
      let rowString = '';
      for (let x = 0; x < this.matrix[y].length; x++) {
        const currentNode = this.matrix[y][x];
        const cell = [currentNode.x, currentNode.y];
        rowString += '|_' + cell + '_|';
      }
      console.log(rowString);
    }
  }

  getNode(x, y) {
    return this.matrix[y][x];
  }

  addMoves() {
    const coefX = [1, 2, -1, -2, -1, -2, 2, 1];
    const coefY = [2, 1, 2, 1, -2, -1, -1, -2];

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const node = this.matrix[y][x];

        for (let i = 0; i < coefX.length; i++) {
          const newX = node.x + coefX[i];
          const newY = node.y + coefY[i];

          if (newX >= 0 && newX < this.size && newY >= 0 && newY < this.size) {
            node.moves.push(this.matrix[newY][newX]);
          }
        }
      }
    }
  }
}

const m = new Matrix(8);
m.printMatrix();
m.addMoves();

function knightMoves(start, end) {
  const startNode = m.getNode(start[0], start[1]);
  const endNode = m.getNode(end[0], end[1]);

  const queue = [[startNode]]; // -> FIFO queue
  startNode.visited = true;

  while (queue[0]) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === endNode) {
      console.log(`You made it ${path.length - 1} moves! Here is your path: `);

      let array = [];
      path.map((element) => array.push(element.coords));

      for (let step of path) {
        console.log(step.coords);
      }
    }

    for (const move of node.moves) {
      if (!move.visited) {
        move.visited = true;
        queue.push([...path, move]); //-> BFS 
      }
    }
  }

  return [];
}

knightMoves([3, 3], [1, 1]);
