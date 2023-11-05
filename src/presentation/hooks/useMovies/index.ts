import { useEffect, useState } from "react"
import { makeRemoteLoadMovies } from "@/main/usecases"
import { useMoviesReturn } from "./types"

export async function getMovies() {
  return await makeRemoteLoadMovies().load()
}

export function useMovies() {
  const [state, setState] = useState<useMoviesReturn>({ 
    data: [],
    loading: true,
    error: '',
  })

  async function loadMovies() {
    try {
      const loadedMovies = await getMovies()

      setState(oldState => {
        return {
          ...oldState,
          loading: false,
          data: loadedMovies
        }
      })
    } catch (error: any) {
      setState(oldState => {
        return {
          ...oldState,
          loading: false,
          error: error.message
        }
      })
    }
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return state
}
