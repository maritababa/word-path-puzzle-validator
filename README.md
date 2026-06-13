# Word Path Puzzle Validator

A small JavaScript validator for browser-based word path puzzle games.

This repository focuses on the core logic behind word path puzzles:

* checking whether two tiles are adjacent
* preventing tile reuse inside a path
* converting a tile path into a word
* validating accepted words
* checking board coverage
* detecting overlapping solution paths

It is intentionally small and dependency-free.

## Why this exists

Word path puzzle games look simple from the outside, but the validation layer matters.

Before adding UI, animations, accounts, leaderboards, or sharing features, the game needs to answer a few basic questions:

* Is every movement legal?
* Is any tile reused?
* Does the selected path form an accepted word?
* Do solution paths overlap?
* Does the final solution cover the required board?

This project keeps those checks clear and reusable.

## Example tile

```js
const tile = {
  row: 1,
  col: 2,
  letter: "A"
}
```

Each tile needs a stable row and column so the validator can check movement rules.

## Core functions

```js
isAdjacent(a, b)
isOrthogonallyAdjacent(a, b)
hasDuplicateTiles(path)
isValidPath(path)
pathToWord(path)
isAcceptedWord(path, acceptedWords)
getCoveredTiles(paths)
isBoardComplete(paths, requiredTileCount)
pathsOverlap(paths)
```

## Use case

This logic can be used for:

* browser word games
* daily puzzle games
* word path prototypes
* grid-based puzzle experiments
* small JavaScript game demos

## Related demo

I am using similar ideas in a small independent browser puzzle project:

https://wendgame.today/

It is a practice project for word path puzzle fans and is not affiliated with LinkedIn or any official game publisher.
