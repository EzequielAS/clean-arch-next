import { LoadMovies } from '@/domain/usecases'

export type useMoviesReturn = {
	data: LoadMovies.Model[] | []
	loading: boolean
	error: string
}
