import { MovieModel } from "../models"

export interface LoadMovies {
  load: () => Promise<LoadMovies.Model[] | []>
}

export namespace LoadMovies {
  export type Model = MovieModel
}
