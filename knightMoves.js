class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
    for (let h = this.matrix.length - 1; h >= 0; h--) {
      let rowString = '';
      for (let w = 0; w < this.matrix[h].length; w++) {
        const currentNode = this.matrix[h][w];
        const cell = [currentNode.x, currentNode.y];
        rowString += '|_' + cell + '_|';
      }
      console.log(rowString);
    }
  }
}

function knightMoves(start, end) {
  // start: [0, 0], end: [2, 2]
}

const m = new Matrix(8);

m.printMatrix();
