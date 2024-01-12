import { MovieLayoutProps } from './types'

import styles from './movie.module.css'

export function MovieLayout({ data }: MovieLayoutProps) {
	const imgUrl =
		process.env.NEXT_PUBLIC_BACKDROP_URL + (data.backdropPath || '')

	return (
		<div className={styles.container}>
			<img className={styles.image} src={imgUrl} alt={data.title} />

			<h1>{data.title}</h1>

			<p className={styles['description-movie']}>{data.overview}</p>
		</div>
	)
}
