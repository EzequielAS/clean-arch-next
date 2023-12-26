import { MovieLayoutProps } from './types'

import styles from './movie.module.css'

export function MovieLayout({ data }: MovieLayoutProps) {
	const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL + (data.backdropPath || '')

	return (
		<div className={styles.container}>
			<img className={styles.image} src={imgUrl} alt={data.title} />

			<h2>{data.title}</h2>

			<p>{data.overview}</p>
		</div>
	)
}
