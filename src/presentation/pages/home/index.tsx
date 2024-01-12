'use client'

import { useMovies } from '@hooks/useMovies'
import { HomeLayout } from './layout'

export function Home() {
	const { data, error, loading } = useMovies()

	const newMoviesData = data.map((movie) => {
		return {
			...movie,
			posterPath: process.env.NEXT_PUBLIC_POSTER_URL + movie.posterPath,
		}
	})

	return <HomeLayout data={newMoviesData} error={error} loading={loading} />
}
