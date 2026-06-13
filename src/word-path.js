export function isAdjacent(a, b) {
  const dx = Math.abs(a.row - b.row)
  const dy = Math.abs(a.col - b.col)

  return dx <= 1 && dy <= 1 && !(dx === 0 && dy === 0)
}

export function isOrthogonallyAdjacent(a, b) {
  const dx = Math.abs(a.row - b.row)
  const dy = Math.abs(a.col - b.col)

  return dx + dy === 1
}

export function hasDuplicateTiles(path) {
  const seen = new Set()

  for (const tile of path) {
    const key = `${tile.row},${tile.col}`

    if (seen.has(key)) {
      return true
    }

    seen.add(key)
  }

  return false
}

export function isValidPath(path) {
  if (!Array.isArray(path) || path.length === 0) {
    return false
  }

  if (hasDuplicateTiles(path)) {
    return false
  }

  for (let i = 1; i < path.length; i++) {
    if (!isAdjacent(path[i - 1], path[i])) {
      return false
    }
  }

  return true
}

export function pathToWord(path) {
  return path.map(tile => tile.letter).join("")
}

export function isAcceptedWord(path, acceptedWords) {
  if (!isValidPath(path)) {
    return false
  }

  const word = pathToWord(path).toLowerCase()

  return acceptedWords.has(word)
}

export function getCoveredTiles(paths) {
  const covered = new Set()

  for (const path of paths) {
    for (const tile of path) {
      covered.add(`${tile.row},${tile.col}`)
    }
  }

  return covered
}

export function isBoardComplete(paths, requiredTileCount) {
  return getCoveredTiles(paths).size === requiredTileCount
}

export function pathsOverlap(paths) {
  const used = new Set()

  for (const path of paths) {
    for (const tile of path) {
      const key = `${tile.row},${tile.col}`

      if (used.has(key)) {
        return true
      }

      used.add(key)
    }
  }

  return false
}
