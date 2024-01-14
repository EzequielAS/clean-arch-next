import { MovieLayoutProps } from './types'

import styles from './movie.module.css'

export function MovieLayout({ data }: MovieLayoutProps) {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={data.backdropPath} alt={data.title} />

			<h1>{data.title}</h1>

			<p className={styles['description-movie']}>{data.overview}</p>
		</div>
	)
}
