import { LoadMovies } from "@/domain/usecases";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { HttpClient, HttpStatusCode } from "../protocols/http";
import { RemoteMovie } from "../models";

export class RemoteLoadMovies implements LoadMovies {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMovies.Model>
  ) {}

  async load (): Promise<LoadMovies.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      cache: 'no-store'
    })

    const remoteMoviesResult = httpResponse.body?.results || []

    const results = remoteMoviesResult.map(result => {
      return { 
        ...result,
        backdropPath: result.backdrop_path,
        releaseDate: result.release_date,
        voteAverage: result.vote_average
      }
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return results

      case HttpStatusCode.unauthorized: throw new UnauthorizedError()

      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadMovies {
  export type Model = {
    results: RemoteMovie[]
  }
}
