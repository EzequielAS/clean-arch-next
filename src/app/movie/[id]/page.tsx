import { MovieFactory } from "@/main/pages/movie/movie-factory";
import { MovieRouteProps } from "./types";
import { redirect } from "next/navigation";

export default function MovieRoute({ params }: MovieRouteProps) {
  const { id } = params

  if (!id) {
    return redirect('/home')
  }

 return <MovieFactory movieId={id} />
}
