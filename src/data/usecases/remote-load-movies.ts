import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { LoadMovies } from '@/domain/usecases'
import { RemoteMovie } from '../models'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteLoadMovies implements LoadMovies {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RemoteLoadMovies.Model>,
	) {}

	async load(): Promise<LoadMovies.Model[]> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
		})

		const remoteMoviesResult = httpResponse.body?.results || []

		const results = remoteMoviesResult.map((result) => {
			return {
				...result,
				posterPath: process.env.NEXT_PUBLIC_POSTER_URL + result.poster_path,
				releaseDate: result.release_date,
				voteAverage: result.vote_average,
			}
		})

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return results

			case HttpStatusCode.unauthorized:
				throw new UnauthorizedError()

			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteLoadMovies {
	export type Model = {
		results: RemoteMovie[]
	}
}
