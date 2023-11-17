import { makeApiUrl } from '@/main/http'
import { LoadMovies } from '@/domain/usecases'
import { RemoteLoadMovies } from '@/data/usecases'
import { makeFetchHttpClient } from '../http'

export const makeRemoteLoadMovies = (): LoadMovies =>
  new RemoteLoadMovies(makeApiUrl('/discover/movie'), makeFetchHttpClient())
  