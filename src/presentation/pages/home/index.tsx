'use client'

import { useMovies } from '@hooks/useMovies'
import { HomeLayout } from './layout'

export function Home() {
	const { data, error, loading } = useMovies()

	return <HomeLayout data={data} error={error} loading={loading} />
}
