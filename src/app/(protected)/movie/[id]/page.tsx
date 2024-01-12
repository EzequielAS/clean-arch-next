import { MovieFactory } from '@/main/pages/movie/movie-factory'
import { redirect } from 'next/navigation'
import { MovieRouteProps } from './types'

export default function MovieRoute({ params }: MovieRouteProps) {
	const { id } = params

	if (!id) {
		return redirect('/home')
	}

	return <MovieFactory movieId={id} />
}
