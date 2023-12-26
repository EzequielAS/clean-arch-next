import { makeRemoteLoadMovies } from '@/main/usecases'
import { getErrorMessage } from '@/presentation/utils/getErrorMessage'
import { useEffect, useState } from 'react'
import { useMoviesReturn } from './types'

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

			setState((oldState) => {
				return {
					...oldState,
					loading: false,
					data: loadedMovies,
				}
			})
		} catch (error) {
			setState((oldState) => {
				return {
					...oldState,
					loading: false,
					error: getErrorMessage(error),
				}
			})
		}
	}

	useEffect(() => {
		loadMovies()
	}, [])

	return state
}
