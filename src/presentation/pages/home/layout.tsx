import { Loader } from '@/presentation/components/Loader'
import { ROUTES_ENUM } from '@/presentation/constants/routes'
import Link from 'next/link'
import { HomeLayoutProps } from './types'

import styles from './home.module.css'

export function HomeLayout({ data, error, loading }: HomeLayoutProps) {
	if (loading) {
		return <Loader />
	}

	if (error) {
		return <p>Error: {error}</p>
	}

	return (
		<div className={styles.container}>
			{data.map((movie) => (
				<Link
					key={movie.id}
					href={`${ROUTES_ENUM.MOVIE}/${movie.id}`}
					className={`${styles.link} home-movie-card`}
				>
					<div className={styles.card}>
						<img
							className={styles.image}
							src={movie.posterPath}
							alt={movie.title}
						/>

						<h3 className={styles['movie-title']}>{movie.title}</h3>
					</div>
				</Link>
			))}
		</div>
	)
}
