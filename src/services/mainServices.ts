import type {
  BookPayload,
  GamePayload,
  MoviePayload,
  MusicPayload,
} from '../types'
const { VITE_API_BASE } = import.meta.env

export const getMusicByUser = async (query: { query: { artist: string } }) => {
  const res = await fetch(`${VITE_API_BASE}/get-music-by-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  if (!res.ok) {
    throw new Error('Error getting music by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMusicItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/get-music-item/${id}`, {
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
  const res = await fetch(`${VITE_API_BASE}/create-music-item`, {
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
  const res = await fetch(`${VITE_API_BASE}/update-music-item/${id}`, {
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

export const deleteMusicItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/delete-music-item/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting music item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMoviesByUser = async (query: { query: { movie: string } }) => {
  const res = await fetch(`${VITE_API_BASE}/get-movies-by-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  if (!res.ok) {
    throw new Error('Error getting movies by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getMovieItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/get-movie-item/${id}`, {
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
  const res = await fetch(`${VITE_API_BASE}/create-movie-item`, {
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
  const res = await fetch(`${VITE_API_BASE}/update-movie-item/${id}`, {
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

export const deleteMovieItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/delete-movie-item/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting movie item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getGamesByUser = async (query: { query: { game: string } }) => {
  const res = await fetch(`${VITE_API_BASE}/get-games-by-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  if (!res.ok) {
    throw new Error('Error getting games by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getGameItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/get-game-item/${id}`, {
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
  const res = await fetch(`${VITE_API_BASE}/create-game-item`, {
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
  const res = await fetch(`${VITE_API_BASE}/update-game-item/${id}`, {
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

export const deleteGameItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/delete-game-item/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting game item')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getBooksByUser = async (query: { query: { book: string } }) => {
  const res = await fetch(`${VITE_API_BASE}/get-books-by-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  if (!res.ok) {
    throw new Error('Error getting books by user')
  }
  const parsedRes = await res.json()
  return parsedRes
}

export const getBookItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/get-book-item/${id}`, {
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
  const res = await fetch(`${VITE_API_BASE}/create-book-item`, {
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
  const res = await fetch(`${VITE_API_BASE}/update-book-item/${id}`, {
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

export const deleteBookItem = async (id: string) => {
  const res = await fetch(`${VITE_API_BASE}/delete-book-item/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Error deleting book item')
  }
  const parsedRes = await res.json()
  return parsedRes
}
