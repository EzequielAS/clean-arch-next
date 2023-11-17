import { Movie } from "@/presentation/pages/movie";
import { MovieFactoryProps } from "./types";
import { makeRemoteLoadMovieDetails } from "@/main/usecases/remote-load-movie-details-factory";

export async function MovieFactory({ movieId }: MovieFactoryProps) {
  const movieDetails = await makeRemoteLoadMovieDetails(movieId).load()

  return <Movie movieDetails={movieDetails} />
}
