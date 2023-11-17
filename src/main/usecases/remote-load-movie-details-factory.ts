import { makeApiUrl } from '@/main/http'
import { LoadMovieDetails } from '@/domain/usecases'
import { RemoteLoadMovieDetails } from '@/data/usecases'
import { makeFetchHttpClient } from '../http'

export const makeRemoteLoadMovieDetails = (movieId: string): LoadMovieDetails =>
  new RemoteLoadMovieDetails(makeApiUrl(`/movie/${movieId}`), makeFetchHttpClient())
