'use client'

import { useMovies } from "@hooks/useMovies";
import { HomeLayout } from "./layout";

export function Home() {
  const { data, error, loading } = useMovies()

  const newMoviesData = data.map(movie =>  {
    return {
      ...movie,
      backdropPath: process.env.NEXT_PUBLIC_IMAGE_URL + movie.backdropPath
    }
  })

  return <HomeLayout data={newMoviesData} error={error} loading={loading} />
}
