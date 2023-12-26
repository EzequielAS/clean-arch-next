import { RemoteLoadMovies } from '@/data/usecases'
import { LoadMovies } from '@/domain/usecases'
import { makeApiUrl } from '@/main/http'
import { makeFetchHttpClient } from '../http'

export const makeRemoteLoadMovies = (): LoadMovies =>
	new RemoteLoadMovies(
		makeApiUrl('/discover/movie'),
		makeFetchHttpClient({ cache: 'no-store' }),
	)
