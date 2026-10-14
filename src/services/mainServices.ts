import type {
  BookPayload,
  GamePayload,
  MoviePayload,
  MusicPayload,
} from '../types'

export const getMusicByUser = async () => {
  const res = await fetch('/get-music-by-user', {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Error getting music by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMusicItem = async (id: string) => {
  const res = await fetch(`/get-music-item/${id}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error getting music item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const createMusicItem = async (musicPayload: MusicPayload) => {
  const res = await fetch('/create-music-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(musicPayload),
  })

  if (!res.ok) {
    throw new Error('Error creating music item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const updateMusicItem = async (
  musicPayload: MusicPayload,
  id: string,
) => {
  const res = await fetch(`/update-music-item/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(musicPayload),
  })

  if (!res.ok) {
    throw new Error('Error updating music item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const deleteMusicItem = async () => {
  const res = await fetch('/delete-music-item', {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting music item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMoviesByUser = async () => {
  const res = await fetch('/get-movies-by-user', {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Error getting movies by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMovieItem = async (id: string) => {
  const res = await fetch(`/get-movie-item/${id}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error getting movie item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const createMovieItem = async (moviePayload: MoviePayload) => {
  const res = await fetch('/create-movie-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(moviePayload),
  })

  if (!res.ok) {
    throw new Error('Error creating movie item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const updateMovieItem = async (
  moviePayload: MoviePayload,
  id: string,
) => {
  const res = await fetch(`/update-movie-item/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(moviePayload),
  })

  if (!res.ok) {
    throw new Error('Error updating movie item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const deleteMovieItem = async () => {
  const res = await fetch('/delete-movie-item', {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting movie item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getGamesByUser = async () => {
  const res = await fetch('/get-games-by-user', {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Error getting games by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getGameItem = async (id: string) => {
  const res = await fetch(`/get-game-item/${id}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error getting game item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const createGameItem = async (gamePayload: GamePayload) => {
  const res = await fetch('/create-game-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(gamePayload),
  })

  if (!res.ok) {
    throw new Error('Error creating game item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const updateGameItem = async (gamePayload: GamePayload, id: string) => {
  const res = await fetch(`/update-game-item/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(gamePayload),
  })

  if (!res.ok) {
    throw new Error('Error updating game item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const deleteGameItem = async () => {
  const res = await fetch('/delete-game-item', {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting game item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getBooksByUser = async () => {
  const res = await fetch('/get-books-by-user', {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Error getting book by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getBookItem = async (id: string) => {
  const res = await fetch(`/get-book-item/${id}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error getting book item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const createBookItem = async (bookPayload: BookPayload) => {
  const res = await fetch('/create-book-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(bookPayload),
  })

  if (!res.ok) {
    throw new Error('Error creating book item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const updateBookItem = async (bookPayload: BookPayload, id: string) => {
  const res = await fetch(`/update-book-item/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(bookPayload),
  })

  if (!res.ok) {
    throw new Error('Error updating book item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const deleteBookItem = async () => {
  const res = await fetch('/delete-book-item', {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting book item')
  }
  const parsedRes = await res.json()
  return parsedRes
}
