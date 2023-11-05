import { LoadMovies } from "@/domain/usecases"

export type HomeLayoutProps = {
  data: LoadMovies.Model[] | []
  loading: boolean
  error: string
}
