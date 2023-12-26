import { makeRemoteLoadMovieDetails } from '@/main/usecases/remote-load-movie-details-factory'
import { Movie } from '@/presentation/pages/movie'
import { MovieFactoryProps } from './types'

export async function MovieFactory({ movieId }: MovieFactoryProps) {
	const movieDetails = await makeRemoteLoadMovieDetails(movieId).load()

	return <Movie movieDetails={movieDetails} />
}
