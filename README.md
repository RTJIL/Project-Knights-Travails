# ♞ knightMoves
Ever wondered how a knight in chess could get from one square to another in the least amount of moves possible? Well, that’s exactly what this project does. It calculates the shortest path a knight takes on a chessboard from point A to point B, and shows every square it hops through to get there.

## 📌 Problem Statement
You’re building a function:

knightMoves(start, end)
Where start and end are coordinates on an 8x8 chessboard, like [0, 0] or [7, 7]. The function will return the shortest path (as an array of coordinates) that a knight can take from start to end.

Yeah, it’s basically Google Maps for horses.

## 🧠 How It Works
The knight moves in that weird-ass L-shape: two squares in one direction and then one square perpendicular.

From any square, the knight has up to 8 possible moves.

We're only working with valid squares on an 8x8 board (so [0,0] to [7,7]).

If multiple shortest paths exist (and they often do), any one of them is valid.

## 🚀 Example Usages
knightMoves([0, 0], [1, 2])
// [[0, 0], [1, 2]]

knightMoves([0, 0], [3, 3])
// Possible outputs:
// [[0, 0], [2, 1], [3, 3]] or
// [[0, 0], [1, 2], [3, 3]]

knightMoves([3, 3], [0, 0])
// [[3, 3], [2, 1], [0, 0]] or [[3, 3], [1, 2], [0, 0]]

knightMoves([0, 0], [7, 7])
// May return something like:
// [[0, 0], [2, 1], [4, 2], [6, 3], [7, 5], [5, 6], [7, 7]]
## 🛠️ Implementation Hints
Use Breadth-First Search (BFS). It’s made for shortest path stuff on unweighted graphs — which is exactly what our chessboard is.

Store visited nodes so you don’t go in circles.

Keep track of the path taken to reach each node.

Knights can’t jump off the board (obviously), so make sure to check bounds.

## 🧾 Example Output
knightMoves([3, 3], [4, 3])
You made it in 3 moves! Here's your path:
[3, 3]
[4, 5]
[2, 4]
[4, 3]
📦 Tech Stack
Language: JavaScript (or whatever you want — logic’s the same)

Algorithm: Breadth-First Search (BFS)

