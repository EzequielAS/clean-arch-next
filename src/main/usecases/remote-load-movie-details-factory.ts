import { RemoteLoadMovieDetails } from '@/data/usecases'
import { LoadMovieDetails } from '@/domain/usecases'
import { makeApiUrl } from '@/main/http'
import { makeFetchHttpClient } from '../http'

export const makeRemoteLoadMovieDetails = (movieId: string): LoadMovieDetails =>
	new RemoteLoadMovieDetails(
		makeApiUrl(`/movie/${movieId}`),
		makeFetchHttpClient(),
	)
