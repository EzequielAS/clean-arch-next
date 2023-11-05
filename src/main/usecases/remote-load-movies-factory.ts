import { makeApiUrl } from '@/main/http'
import { LoadMovies } from '@/domain/usecases'
import { RemoteLoadMovies } from '@/data/usecases'
import { makeAxiosHttpClient } from '../http'

export const makeRemoteLoadMovies = (): LoadMovies =>
  new RemoteLoadMovies(makeApiUrl(`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`), makeAxiosHttpClient())