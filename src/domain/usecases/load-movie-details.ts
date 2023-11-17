import { MovieDetailsModel } from "../models"

export interface LoadMovieDetails {
  load: () => Promise<LoadMovieDetails.Model>
}

export namespace LoadMovieDetails {
  export type Model = MovieDetailsModel
}

