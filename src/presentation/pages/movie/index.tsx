import { MovieLayout } from './layout'
import { MovieProps } from './types'

export function Movie({ movieDetails }: MovieProps) {
	return <MovieLayout data={movieDetails} />
}
