import { LoadMovieDetails } from "@/domain/usecases";
import { UnauthorizedError, UnexpectedError } from "@/domain/errors";
import { HttpClient, HttpStatusCode } from "../protocols/http";
import { RemoteMovieDetail } from "../models";

export class RemoteLoadMovieDetails implements LoadMovieDetails {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMovieDetails.Model>
  ) {}

  async load (): Promise<LoadMovieDetails.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    const remoteMovieDetailsResult = httpResponse.body

    const movieDetails = {
      ...remoteMovieDetailsResult,
      backdropPath: remoteMovieDetailsResult?.backdrop_path
    }

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return movieDetails

      case HttpStatusCode.unauthorized: throw new UnauthorizedError()

      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadMovieDetails {
  export type Model = RemoteMovieDetail
}
